export interface Player {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  picture: Picture;
  country: Country;
  stats: Stats;
}

export interface Picture {
  url: string;
}

export interface Country {
  picture: Picture;
  code: string;
}

export interface Stats {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: boolean[];
}
