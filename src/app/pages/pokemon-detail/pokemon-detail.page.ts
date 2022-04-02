import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadPokemon();
  }

  private loadPokemon(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.pokemonService.detail(id).subscribe(response => {
      this.pokemon = response;
    });
  }

}
