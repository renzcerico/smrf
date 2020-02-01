import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-job-order-form',
  templateUrl: './job-order-form.component.html',
  styleUrls: ['./job-order-form.component.css',
              '../job-order/job-order.component.css',
              './../request/request.component.css']
})
export class JobOrderFormComponent implements OnInit {
  jobOrderWorkRequired;
  jobOrderIssuedTo;
  jobOrderDateRequired;
  jobOrderEstimatedTime;
  jobOrderMaterials = 0;
  jobOrderManpower = 0;
  jobOrderStatusReport;
  jobOrderDateStarted;
  jobOrderDateFinished;
  jobOrderDowntime;
  jobOrderNotes;

  attrOther = false;

  manpowerList = [];
  materialList = [];
  @Input() requestDetails;

  constructor() { }

  ngOnInit() {
    // console.log(this.requestDetails);
  }

  btnAddManpower() {
    const manpower = (document.getElementById('jobManpower') as HTMLSelectElement);
    const manpowerName = manpower.options[manpower.selectedIndex].text;
    const manpowerID = manpower.options[manpower.selectedIndex].value;

    if (!this.manpowerList.includes(manpowerName) && parseInt(manpowerID, 10) > 0) {
      this.manpowerList.push(manpowerName);
    }

    $('#jobManpower').prop('selectedIndex', 0);
  }

  btnAddMaterial() {
    const materialID = $('#jobOrderMaterials option:selected').val() as any;
    const materialDescription = $('#jobOrderMaterials option:selected').text();

    if (!this.materialList.includes(materialDescription) && parseInt(materialID, 10) > 0) {
      this.materialList.push(materialDescription);
    }

    this.jobOrderMaterials = 0;
  }

  removeMaterial(material) {
    const index = this.materialList.indexOf(material);
    this.materialList.splice(index, 1);

    return false;
  }

  removeManpower(manpower) {
    const index = this.manpowerList.indexOf(manpower);
    this.manpowerList.splice(index, 1);

    return false;
  }

  createJobOrder() {
    const json = {
      id: this.requestDetails.id,
      work_required: this.jobOrderWorkRequired,
      issued_to: this.jobOrderIssuedTo,
      date_required: this.jobOrderDateRequired,
      materials: this.materialList,
      manpower: this.manpowerList,
      status_report: this.jobOrderStatusReport,
      date_started: this.jobOrderDateStarted,
      date_finished: this.jobOrderDateFinished,
      total_downtime: this.jobOrderDowntime,
      notes: this.jobOrderNotes
    };

    console.log(json);
  }

  otherInfo() {
    this.attrOther = !this.attrOther;
  }

}
