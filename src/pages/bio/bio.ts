import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {
  biografia="";
  image="";
  parrafos="";
  artista="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('image'));
    console.log(this.navParams.get('parrafos'));
    console.log(this.navParams.get('biografia'));
    console.log(this.navParams.get('artista'));
    this.image=this.navParams.get('image');
    this.parrafos=this.navParams.get('parrafos');
    this.biografia=this.navParams.get('biografia');
    this.artista=this.navParams.get('artista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');
  }

}
