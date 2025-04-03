// src/app/models/character.ts
export interface Character {
    id?: string; // Optional, depends on API data
    name: string;
    species?: string;
    house?: string;
    wizard?: boolean;
    ancestry?: string;
    wand?: {
      wood?: string;
      core?: string;
      length?: number;
    };
    actor?: string;
    image?: string;
  }
  