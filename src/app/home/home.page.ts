import { Component } from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inBrowser: InAppBrowser){

  }

  opentab1(){
    this.inBrowser.create("https://www.google.com",'_self');
    console.log("hello");
  }

}
