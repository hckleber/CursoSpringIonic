import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { CriadorService } from '../../services/domain/criador.service';
import { API_CONFIG } from '../../config/api.config';
import { CriadorDTO } from '../../models/criador.dto';

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

  criador: CriadorDTO;

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
        this.getImageIfExists();
      },
      error => {
        if(error.status == 403){
          this.navCtrl.setRoot('HomePage');
        }
      });
    }  
    else{
      this.navCtrl.setRoot('HomePage');
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
