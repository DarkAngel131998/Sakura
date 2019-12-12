import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StaffService } from "../staff.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { format } from "url";
import { Role } from "../interfaces/role";
import { stringify } from "@angular/compiler/src/util";
import { ViewStaff } from "../interfaces/viewStaff";

@Component({
  selector: "app-staff-data",
  templateUrl: "./staff-data.component.html",
  styleUrls: ["./staff-data.component.scss"]
})
export class StaffDataComponent implements OnInit {
  validateForm: FormGroup;
  viewstaff: ViewStaff;
  @Input() id: number;
  @Output() cusOnClose = new EventEmitter<any>();

  constructor(
    public staffService: StaffService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.validateForm = this.fb.group({
      id: Number,
      name: [null, [Validators.required]],
      member: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startdate: [null, [Validators.required]],
      finishdate: [null, [Validators.required]],
      bugtest: [null, [Validators.required]],
      buguat: [null, [Validators.required]],
      pcost: [null, [Validators.required]],
      acost: [null, [Validators.required]],
      cssscore: [null, [Validators.required]],
      status: [null]
    });
    if (!this.id) {
      this.id = +this.route.snapshot.params.id;
    }
    if (this.id) {
      const viewstaff: ViewStaff = await this.staffService
        .getAPIWithId(this.id)
        .toPromise();
      // tslint:disable-next-line: no-unused-expression
      // tslint:disable-next-line: no-debugger
      debugger;
      if (viewstaff) {
        this.validateForm.setValue(viewstaff);
      }
    }
  }

  resetForm(e: MouseEvent) {
    e.preventDefault();
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  async submitForm() {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid) {
      return;
    }
    const formData = this.validateForm.value;
    formData.bugtest = +formData.bugtest;
    formData.buguat = +formData.buguat;
    formData.pcost = +formData.pcost;
    formData.acost = +formData.acost;
    formData.csscsore = +formData.csscsore;
    this.viewstaff = formData;
    if (this.id) {
      await this.staffService.putAPI(this.id, this.viewstaff).toPromise();
    } else {
      await this.staffService.postAPI(formData as ViewStaff).toPromise();
    }
    this.cusOnClose.emit(true);
    // this.router.navigate(['/staff']);
  }
}
