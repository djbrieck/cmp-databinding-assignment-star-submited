import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() valueEmitter = new EventEmitter<Number>();

  ref;

  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){

    this.ref = setInterval(this.incrementer.bind(this), 1000);

  }

  private incrementer(){
    this.count = this.count + 1;
    console.log(this.count);
    this.valueEmitter.emit(this.count);
  }

  endGame(){
    clearInterval(this.ref);
  }

}
