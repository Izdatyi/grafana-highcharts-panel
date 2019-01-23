import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

import './css/panel.base.scss';
// Remove next imports if you don't need separate styles for light and dark themes
import './css/panel.dark.scss';
import './css/panel.light.scss';
// Remove up to here


var _element;

// const Highcharts = require('highcharts');
// try {
//   var Highcharts = require('highcharts');
// } catch (err) { }
var Highcharts = require('highcharts');

// for debugging
window.Highcharts = Highcharts;

class Ctrl extends MetricsPanelCtrl {

  constructor($scope, $injector) {
    console.log("<constructor>");
    console.log("Highcharts version:", Highcharts.version);
    super($scope, $injector);
    this.events.on('data-received', this._onDataReceived.bind(this));
    this.events.on('render', this._onRender.bind(this) );
    // this.events.on('init-edit-mode', () => {console.log("init-edit-mode");} );
  }

  _onRender() {
    // console.log("render");
    if (this.chart) {
      // this.chart.redraw();
      this.chart.setSize(undefined, undefined, false);
    }
  }

  _onDataReceived(data) {
    console.log("----------------------------");
    console.log("_onDataReceived:", data);
    if (!this.chart) {
      this.chart = this._createChart(data);
      console.log("chart:", this.chart); // Highcharts.charts[0]
    } else {
      this._updateChart(data);
    }
  }

  _createChart(data) {
    console.log("_createChart");
    return Highcharts.chart('iz-container', {
      "chart": {
        "type": "line",
        "backgroundColor": "#212124",
        "style": {
          "fontFamily": "Roboto,Helvetica,Arial,sans-serif",
          "fontSize": "13px"
        },
        "spacingTop": 8,
        "spacingLeft": 0,
        "spacingRight": 1,
        "spacingBottom": 11
      },
      "title": {
        "text": "Example",
        "style": {
          "display": "none"
        }
      },
      "subtitle": {
        "text": "Source: thesolarfoundation.com",
        "style": {
          "display": "none"
        }
      },
      "exporting": {
        "enabled": false
      },
      "credits": {
        "enabled": false
      },
      "pane": {
        "background": []
      },
      "responsive": {
        "rules": []
      },
      "yAxis": {
        "title": {
          "style": {
            "color": "#d8d9da",
            "fontSize": "12px"
          },
          "text": "Label of Label",
          "x": -5,
          "margin": 7
        },
        "labels": {
          "style": {
            "color": "#d8d9da",
            "fontSize": "85%"
          },
          "x": -5,
          "autoRotation": [],
          "y": 3
        },
        "gridLineColor": "#454548",
        "gridLineWidth": 1
      },
      "xAxis": {
        "crosshair": {
          "color": "#8e0607e6",
          "width": 1
        },
        "labels": {
          "style": {
            "color": "#d8d9da",
            "fontSize": "85%"
          },
          "autoRotation": [],
          "y": 16
        },
        "title": {
          "style": {
            "color": "#d8d9da"
          },
          "x": 0
        },
        "gridLineColor": "#454548",
        "gridLineWidth": 1,
        "lineWidth": 0,
        "tickLength": 0,
        "type": "datetime"
      },
      "legend": {
        "itemHoverStyle": {
          "color": "#e3e3e3"
        },
        "itemStyle": {
          "color": "#d8d9da",
          "fontSize": "85%",
          "fontWeight": ""
        },
        "align": "right",
        "symbolHeight": 1,
        "symbolWidth": 11,
        "margin": 5,
        "enabled": false,
        "y": 9
      },
      "tooltip": {
        "style": {
          "color": "#d8d9da"
        },
        "backgroundColor": "rgba(20,20,20,0.9)",
        "borderColor": "rgba(20,20,20,0.9)",
        "headerFormat": "<span style=\"font-size: 12px\">{point.key}</span><br/>",
        "hideDelay": 1,
        "padding": 9,
        "shape": "square"
      },
      "plotOptions": {
        "series": {
          "connectNulls": true
        }
      },

      series: this._makeSeries(data),
    });
  }

  flip(array) {
    // return array.map(([x, y]) => ([y * 1000, x]));
    var offset = new Date().getTimezoneOffset();
    console.log("getTimezoneOffset:", offset, 'min');
    offset = offset * 60 * 1000;
    return array.map(([x, y]) => ([y - offset, x]));
  }

  _makeSeries(data) {  // Highcharts.charts[0]
    console.log("_makeSeries");
    return data.map((timeSerie) => {
      console.log("timeSerie:", timeSerie);
      return {
        id: timeSerie.target,
        name: timeSerie.target,
        data: this.flip(timeSerie.datapoints),

        turboThreshold: 0,
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 4
        },
        // color: '#FF0000',
        // yAxis: 1,
        type: "spline"
      }
    });
  }

  _updateChart(data) {
    console.log("_updateChart");
    console.log("this.chart.series:", this.chart.series);

    const series = this._makeSeries(data);
    console.log("series:", series);

    let newOnes = [], oldOnes = [], delOnes = [];
    
    for (let i = 0; i < this.chart.series.length; i++) {
      if (series.find( (serie) => serie.name === this.chart.series[i].name ) ) {
        console.log("FOUND:", this.chart.series[i]);
      } else {
        console.log("REMOVE:", this.chart.series[i]);
        delOnes.push(this.chart.series[i]);
      }
    }
    console.log("delOnes:", delOnes);

    delOnes.forEach((serie) => {
      serie.remove(true);
    });

    for (let i = 0; i < series.length; i++) {
      if (this.chart.series.find((serie) => serie.name === series[i].name)) {
        oldOnes.push(series[i]);
      } else {
        newOnes.push(series[i]);
      }
    }
    console.log("oldOnes:", oldOnes);
    console.log("newOnes:", newOnes);

    newOnes.forEach((serie) => {
      this.chart.addSeries(serie, false);
    });

    this.chart.update({series: oldOnes}, false);
    this.chart.redraw();
  }


  ///////////////////////////////////////////////////////////////////////////////////

  link(scope, element) {
    this.initStyles();
    this._element = element;
  }

  initStyles() {
    window.System.import(this.panelPath + 'css/panel.base.css!');
    // Remove next lines if you don't need separate styles for light and dark themes
    if (grafanaBootData.user.lightTheme) {
      window.System.import(this.panelPath + 'css/panel.light.css!');
    } else {
      window.System.import(this.panelPath + 'css/panel.dark.css!');
    }
    // Remove up to here
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }
  
}

Ctrl.templateUrl = 'partials/template.html';

export { Ctrl as PanelCtrl }
