export interface Ability {
  ability: NameAndURL[];
  is_hidden: boolean;
  slot: number;
}

export interface GameIndice {
  game_index: number;
  version: NameAndURL;
}

export interface HeldItem {
  item: NameAndURL;
  version_details: VersionDetail[];
}

export interface Move {
  move: NameAndURL;
  version_group_details: VersionGroupDetail[];
}

export interface NameAndURL {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: NameAndURL[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: unknown[];
  species: NameAndURL;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface Stat {
  base_stat: number;
  effor: number;
  stat: NameAndURL;
}

export interface Type {
  slot: number;
  type: NameAndURL;
}

export interface VersionDetail {
  rarity: number;
  version: NameAndURL;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameAndURL;
  version_group: NameAndURL;
}
