import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ViewStaff } from '../interfaces/viewStaff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {
  chart: Chart;
  project: ViewStaff;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService
  ) { }

  async ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.project = await this.staffService
      .getAPIWithId(this.id)
      .toPromise();
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Bug Test', 'Bug UAT', 'Cost', 'CSS score'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [
              this.project.bugtest,
              this.project.buguat,
              this.project.pcost,
              this.project.cssscore
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
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
