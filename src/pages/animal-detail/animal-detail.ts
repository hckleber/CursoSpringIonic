import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeixeDTO } from '../../models/peixe.dto';

/**
 * Generated class for the AnimalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-detail',
  templateUrl: 'animal-detail.html',
})
export class AnimalDetailPage {

  animal : PeixeDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.animal = {
      id: "1",
      nomePopular: "Peixe",
      especie: "Osseo"
    }
  }

}
