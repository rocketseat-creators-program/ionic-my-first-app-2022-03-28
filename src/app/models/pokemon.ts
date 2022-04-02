import { PokemonStat } from "./pokemon-stat";

export class Pokemon {
    id: number;
    height: number;
    name: string;
    sprite: string;
    stats: PokemonStat[];
}
