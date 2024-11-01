import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router,
  ) { }
  
  ngOnInit() {
  }
  
  loadServers(id: number) {
    // complex calculation
    // setTimeout(() => {
    //   this.router.navigate(['/servers', 1, 'edit'], { queryParams: { allowEdit: '1' } });
    // }, 1000);
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' } });
  }
}
