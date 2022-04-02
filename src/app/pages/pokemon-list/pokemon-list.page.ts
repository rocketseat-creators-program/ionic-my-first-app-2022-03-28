import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  pokemonsFiltered: Pokemon[] = [];

  private pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  onSearchInput(event: any): void {
    const text: string = event.target.value;

    if (text) {
      this.pokemonsFiltered = this.pokemons.filter(pokemon => {
        return pokemon.name.startsWith(text.toLowerCase());
      });
    } else {
      this.pokemonsFiltered = this.pokemons;
    }
  }

  private loadPokemons(): void {
    this.pokemonService.pokemons().subscribe(response => {
      this.pokemons = response;
      this.pokemonsFiltered = response;
    });
  }

}
