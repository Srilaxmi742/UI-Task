import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import * as _moment from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

const moment =   _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ItemdetailsComponent implements OnInit {

  itemprice:string;
  textValue="";
  textValue1="";
  names: any = ['textbox'];

  constructor() { }

  ngOnInit() {
  }

  /*removeItem(i: number): void {
    this.names.splice(i, 1);
  }
*/

}
