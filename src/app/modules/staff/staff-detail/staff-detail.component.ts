import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzTableModule } from "ng-zorro-antd/table";
import { Chart } from 'chart.js';
import { RedEnvelopeFill } from '@ant-design/icons-angular/icons/public_api';
import { ViewStaff } from '../interfaces/viewStaff';
import { StaffService } from '../staff.service';

@Component({
  selector: "app-staff-detail",
  templateUrl: "./staff-detail.component.html",
  styleUrls: ["./staff-detail.component.scss"]
})
export class StaffDetailComponent implements OnInit {
  chart: Chart;
  project: ViewStaff;
  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private viewStaff: ViewStaff
  ) {}
  id = +this.route.snapshot.params.id;
  async ngOnInit() {
   const project: ViewStaff = await  this.staffService.getAPIWithId(this.id).toPromise();
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
