import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

import './css/panel.base.scss';
// Remove next imports if you don't need separate styles for light and dark themes
import './css/panel.dark.scss';
import './css/panel.light.scss';
// Remove up to here


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
  }

  _onDataReceived(data) {
    console.log("_onDataReceived:", data);
    if (!this.chart) {
      this.chart = this._createChart(data);
    } else {
      this._updateChart(data);
    }
  }

  _createChart(data) {
    console.log("_createChart");
    return Highcharts.chart('iz-container', {
      xAxis: { type: 'datetime' },
      series: this._makeSeries(data),
      plotOptions: {
        series: {
          connectNulls: true
        }
      },
      title: { text: 'TimeSeries Charts' },
      legend: {
        enabled: false
      }
    });
  }

  _makeSeries(data) {
    console.log("_makeSeries");
    return data.map((timeSerie) => {
      return {
        id: timeSerie.target,
        name: timeSerie.target,
        data: this.flip(timeSerie.datapoints)
      }
    });
  }

  flip(array) {
    return array.map(([x, y]) => ([y * 1000, x]));
  }

  _updateChart(data) {
    const series = this._makeSeries(data);
    let newOnes = [], oldOnes = [];
    for (let i = 0; i < series.length; i++) {
      if (this.chart.series.find((serie) => serie.name === series[i].name)) {
        oldOnes.push(series[i]);
      } else {
        newOnes.push(series[i]);
      }
    }
    newOnes.forEach((serie) => {
      this.chart.addSeries(serie, false);
    });
    console.log(newOnes);
    this.chart.update({series: oldOnes}, false);
    this.chart.redraw();
  }


  ///////////////////////////////////////////////////////////////////////////////////

  link(scope, element) {
    this.initStyles();
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
