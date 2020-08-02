import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeixeDTO } from '../../models/peixe.dto';
import { AnimaisService } from '../../services/domain/animais.service';

@IonicPage()
@Component({
  selector: 'page-animal-detail',
  templateUrl: 'animal-detail.html',
})
export class AnimalDetailPage {

  animal : PeixeDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public animalService: AnimaisService) {
  }

  ionViewDidLoad() {
    let animal_id = this.navParams.get('animal_id')
   this.animalService.findById(animal_id)
   .subscribe(response => {
     this.animal = response;
   },
   error => {});
  }

}
