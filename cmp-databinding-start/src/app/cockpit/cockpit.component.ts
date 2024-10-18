import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ServerNameInput: string, ServerContentInput: string}>();
  @Output() blueprintCreated = new EventEmitter<{ServerNameInput: string, ServerContentInput: string}>();
  // newServerNameInput = '';
  // newServerContentInput = '';

  @ViewChild('ServerContentInputInput', { static: true }) ServerContentInputInput: ElementRef;

  onAddServer(ServerNameInput: HTMLInputElement, ServerContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      ServerNameInput: ServerNameInput.value,
      ServerContentInput: ServerContentInput.value,
    });
  }

  onAddBlueprint(ServerNameInput: HTMLInputElement, ServerContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      ServerNameInput: ServerNameInput.value,
      ServerContentInput: ServerContentInput.value,
    });
  }
}
