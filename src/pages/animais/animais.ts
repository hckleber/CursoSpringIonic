import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeixeDTO } from '../../models/peixe.dto';
import { AnimaisService } from '../../services/domain/animais.service';

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {

  peixes: PeixeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public animalService: AnimaisService) {
  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    this.animalService.findByCategoria(categoria_id)
      .subscribe(response => {
        this.peixes = response['content'];
      },
      error => {});
    }
}

