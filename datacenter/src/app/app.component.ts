import { Component, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // alertRef: ComponentRef<AlertComponent> | undefined;
  @ViewChild(DashboardComponent) dashboard!: DashboardComponent;
  // @ViewChild('alertBox', {read: ViewContainerRef}) alertBox: ViewContainerRef | undefined;

  // constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  alert(date: any) {
    // if (!this.alertRef) {
    //   const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
    //   this.alertRef = this.alertBox!.createComponent(alertComponent);
    }

  //   this.alertRef.instance.date = date;
  //   this.alertRef.changeDetectorRef.detectChanges();

  //   setTimeout(() => this.destroyAlert(), 5000);
  // }

  // destroyAlert() {
  //   if (this.alertRef) {
  //     this.alertRef.destroy();
  //     delete this.alertRef;
  //   }
  // }

  refresh() {
    this.dashboard.generateData();
  }
}
