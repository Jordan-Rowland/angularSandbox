import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = { id: 0, name: "DEFAULT NAME" };
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.user.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
