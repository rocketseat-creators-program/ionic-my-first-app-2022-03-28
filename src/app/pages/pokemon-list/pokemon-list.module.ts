import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';

import { PokemonListPage } from './pokemon-list.page';
import { PokemonService } from 'src/app/services/pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonListPageRoutingModule
  ],
  declarations: [PokemonListPage],
  providers: [PokemonService]
})
export class PokemonListPageModule { }
