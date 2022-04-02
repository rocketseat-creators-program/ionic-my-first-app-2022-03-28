import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Pokemon } from '../models/pokemon';
import { PokemonStat } from '../models/pokemon-stat';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  pokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.api}/pokemons`).pipe(
      map(pokemons => pokemons.map(this.mapPokemon))
    );
  }

  detail(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.api}/pokemons/${id}`).pipe(
      map(this.mapPokemon)
    );
  }

  private mapPokemon(pokemon: Pokemon): Pokemon {
    pokemon.stats = pokemon.stats.map((attr: any) => new PokemonStat(attr.stat.name, attr.base_stat));
    return pokemon;
  };

}
