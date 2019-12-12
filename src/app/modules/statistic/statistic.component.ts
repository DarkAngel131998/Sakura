import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  chart: Chart;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
    data: {
      labels: ['Bug Test', 'Bug UAT', 'Cost', 'CSS score'],
      datasets: [
        {
          data: [
            project.bugtest, project.buguat, project.pcost, project.cssscore
          ],
          backgroundColor: ['#0074D9', '#2ECC40', '#FF4136', '#00ff00']
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Color test'
      },
      legend: {
        position: 'left',
        display: true,
        fullWidth: true,
        labels: {
          fontSize: 11
        }
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
    });
  }

}
