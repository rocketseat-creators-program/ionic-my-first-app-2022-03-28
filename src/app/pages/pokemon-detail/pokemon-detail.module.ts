import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';

import { PokemonDetailPage } from './pokemon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PokemonDetailPageRoutingModule
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule { }
