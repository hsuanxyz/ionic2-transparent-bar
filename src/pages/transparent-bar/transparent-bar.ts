import {Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/*
  Generated class for the TransparentBar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transparent-bar',
  templateUrl: 'transparent-bar.html'
})
export class TransparentBarPage {
    @ViewChild(Content) content: Content;
    showToolbar:boolean = false;
    headerImgSize:string = '100%';
    headerImgUrl:string = '';
    transition:boolean = false;
    articles:Array<any> = new Array(10).fill('');

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ref: ChangeDetectorRef,
    ) {


    }

  ionViewDidLoad() {
      console.log('ionViewDidLoad TransparentBarPage');

      this.headerImgUrl = './assets/bg.jpg';

      // this.content.enableScrollListener();
  }
    onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        if(scrollTop < 0){
            this.transition = false;
            this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
            this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
    }


}
