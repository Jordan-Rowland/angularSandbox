import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<number>();

  interval;
  num = 0;

  onGameStarted() {
    this.interval = setInterval(() => {
      this.num++;
      this.gameStarted.emit(this.num);
    }, 1000);
  }

  onGameStopped() {
    console.log('Game stopped');
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
