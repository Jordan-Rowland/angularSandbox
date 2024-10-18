import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navChange = new EventEmitter<string>();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onNavChange(page: string) {
    this.navChange.emit(page)
  }

}
