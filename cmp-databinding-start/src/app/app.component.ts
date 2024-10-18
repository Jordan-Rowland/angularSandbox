import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  // onServerAdded(serverData: {ServerNameInput: string, ServerContentInput: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.ServerNameInput,
  //     content: serverData.ServerContentInput,
  //   });
  // }

  // onBlueprintAdded(blueprintData: {ServerNameInput: string, ServerContentInput: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.ServerNameInput,
  //     content: blueprintData.ServerContentInput,
  //   });
  // }

  ////////////////////////////////////

  evenNumbers = [];
  oddNumbers = [];

  onIntervalFired(firedNumber: number) {
    console.log("FIRED NUMBER:", firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    console.log(this.oddNumbers);
  }

}
