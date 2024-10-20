import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() stock: any;

  isNegative() {
    // return (this.stock && this.stock.change < 0);
    return this.stock?.change < 0;
  }

  isPositive() {
    // return (this.stock && this.stock.change > 0);
    return this.stock?.change > 0;
  }
}
