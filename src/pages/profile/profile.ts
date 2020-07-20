import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CriadorService } from '../../services/domain/criador.service';
import { API_CONFIG } from '../../config/api.config';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  criador: CategoriaDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public criadorService: CriadorService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.criadorService.findByEmail(localUser.email)
      .subscribe(response => {
        this.criador = response;
        
      },
      error => {});
    }  
  }

  getImageIfExists(){
    this.criadorService.getImageFromBucket(this.criador.id)
    .subscribe(Response => 
      {
        this.criador.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.criador.id}.jpg`
      },
      error => {});
  }

}
