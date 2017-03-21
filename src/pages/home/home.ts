import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TransparentBarPage } from  '../transparent-bar/transparent-bar'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openTransparentBar():any {
    this.navCtrl.push(TransparentBarPage)
  }

}
