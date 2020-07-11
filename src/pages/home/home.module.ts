import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';

@NgModule({
    declarations: [HomePage],
    //por padrao colocar o imports
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule{
}