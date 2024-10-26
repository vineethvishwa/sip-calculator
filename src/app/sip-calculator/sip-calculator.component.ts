import { Component } from '@angular/core';

@Component({
  selector: 'app-sip-calculator',
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.scss']
})
export class SipCalculatorComponent {
  monthlyInvestment: number = 0;
  rateOfReturn: number = 0;
  tenure: number = 0;
  totalValue: number = 0;

  calculateSIP() {
    const n = this.tenure * 12; // months
    const r = this.rateOfReturn / 12 / 100; // monthly rate
    this.totalValue = this.monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
}
