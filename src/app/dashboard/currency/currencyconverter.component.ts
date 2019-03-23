import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CurrencyService } from './currency.service';
import { ToastrService } from 'ngx-toastr';
import { countryCurrency } from './currencyconverterdata';
import { ErrorStateMatcher } from '@angular/material/core';

export interface CountryCurrency {
  name: string;
  code: string;
}

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.scss']
})
export class CurrencyconverterComponent implements OnInit {
  currencyForm: FormGroup;
  currency: any = [];
  src: any;
  dest: any;
  outputCurrency: any;
  currencyList: CountryCurrency[];

//Reference [3] starts
  constructor(public rest: CurrencyService, private router: Router, private toastrService: ToastrService) {
    this.currencyForm = new FormGroup({
      amount: new FormControl('', [Validators.pattern("^[0-9]*\.?[0-9]*$"), Validators.required]),
      baseCurrency: new FormControl('', [Validators.required]),
      outputCurrency: new FormControl('', [Validators.required])
    });
  }
//Reference [3] ends
  ngOnInit() {
    //console.log("hey");
    this.currencyList = (<any>countryCurrency);
    //console.log(this.currencyList);
  }

  getCurrency(inputAmt: number) {
    this.currency = [];
    this.outputCurrency="";
    if (this.dest && this.src && inputAmt && !isNaN(inputAmt)) {
      this.rest.getCurrency(this.src, this.dest).subscribe((data: {}) => {
        console.log(data[this.src + "_" + this.dest]);
        this.outputCurrency = data[this.src + "_" + this.dest] * inputAmt;
        var num = new Number(this.outputCurrency);
        this.outputCurrency = num.toFixed(2);
      });
    }
  }

  selectedSrc(value: any) {
    this.src = value;
    //console.log(this.src);
  }

  selectedDest(value: any) {
    this.dest = value;
    //console.log(this.dest);
  }
}
