import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeixeDTO } from '../../models/peixe.dto';

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {

  peixes: PeixeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.peixes = [
      {
        id: "1",
        especie: "osseo",
        nomePopular: "baiacu"
      },
      {
        id: "2",
        especie: "cartilaginoso",
        nomePopular: "cação"
      }
    ]
  };

}

