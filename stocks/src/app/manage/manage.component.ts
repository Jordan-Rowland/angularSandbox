import { Component } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  symbols: string[];
  stock: string;

  constructor(
    private service: StocksService
  ) {
    this.symbols = service.get();
  }

  add() {
    if (this.stock) {
      this.symbols = this.service.add(this.stock.toUpperCase());
      this.stock = '';
    }
  }

  remove(symbol: string) {
    this.symbols = this.service.remove(symbol);
  }
}
