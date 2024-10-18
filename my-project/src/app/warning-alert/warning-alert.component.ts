import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  
  warningString: any;

  constructor() {
    this.warningString = "This is a warning!"
  }

  ngOnInit(): void {
  }

}
