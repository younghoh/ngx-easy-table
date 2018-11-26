import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-inline-row',
  templateUrl: './inline-row.component.html',
  styleUrls: ['./inline-row.component.css'],
  providers: [ConfigService],
})
export class InlineRowComponent implements OnInit {
  @ViewChild('phoneTpl') phoneTpl: TemplateRef<any>;
  @ViewChild('ageTpl') ageTpl: TemplateRef<any>;
  @ViewChild('companyTpl') companyTpl: TemplateRef<any>;
  @ViewChild('nameTpl') nameTpl: TemplateRef<any>;
  @ViewChild('actionTpl') actionTpl: TemplateRef<any>;

  @ViewChild('phone') phone: ElementRef<any>;
  @ViewChild('age') age: ElementRef<any>;
  @ViewChild('company') company: ElementRef<any>;
  @ViewChild('name') name: ElementRef<any>;
  columns;
  data = [];
  configuration;
  editRow: number;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  ngOnInit(): void {
    this.columns = [
      { key: 'phone', title: 'Phone', cellTemplate: this.phoneTpl },
      { key: 'age', title: 'Age', cellTemplate: this.ageTpl },
      { key: 'company', title: 'Company', cellTemplate: this.companyTpl },
      { key: 'name', title: 'Name', cellTemplate: this.nameTpl },
      { key: 'action', title: 'Actions', cellTemplate: this.actionTpl },
    ];
  }

  edit(rowIndex: number) {
    this.editRow = rowIndex;
  }

  update() {
    this.data = [...this.data.map((obj, index) => {
      if (index === this.editRow) {
        return Object.assign({}, {
          phone: this.phone.nativeElement.value,
          age: this.age.nativeElement.value,
          company: this.company.nativeElement.value,
          name: this.name.nativeElement.value,
        });
      }
      return obj;
    })];
    this.editRow = -1;
  }
}
