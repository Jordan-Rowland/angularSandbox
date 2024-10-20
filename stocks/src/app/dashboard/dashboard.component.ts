import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    stocks: StockInterface[];
    symbols: string[];
  
    constructor(
      private service: StocksService
    ) {
      this.symbols = service.get();
    }

    ngOnInit() {
      this.service.load(this.symbols)
        .subscribe((stocks: StockInterface[]) => { this.stocks = stocks; });
    }
  }
