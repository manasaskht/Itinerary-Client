import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyconverterComponent } from './currencyconverter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatTabsModule,MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CurrencyconverterComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CurrencyModule { }
