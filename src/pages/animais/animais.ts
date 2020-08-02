import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeixeDTO } from '../../models/peixe.dto';
import { AnimaisService } from '../../services/domain/animais.service';
import { API_CONFIG } from '../../config/api.config';

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
        this.loadImageUrls();
      },
      error => {});
    }

    loadImageUrls(){
      for(var i=0; i<this.peixes.length; i++){
        let peixe = this.peixes[i];
        this.animalService.getSmallImageFromBucket(peixe.id)
        .subscribe(response => {
          peixe.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${peixe.id}-small.jpg`;
        },
        error => {});
      }
    }

    showDetail(animal_id : string){ 
      this.navCtrl.push('AnimalDetailPage', {animal_id : animal_id});
    }

  }

