import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { swipeShouldReset } from 'ionic-angular/util/util';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

scoreTeamB=0;
scoreTeamA=0;

  constructor(public navCtrl: NavController) {

  }
  TeamB(value:number):void{
    this.scoreTeamB+=value;}

TeamA(value:number):void{
  this.scoreTeamA+=value;
}

reset():void{
  this.scoreTeamA=0;
  this.scoreTeamB=0;
}
End():void{this.navCtrl.push(WinnerPage)}
}


