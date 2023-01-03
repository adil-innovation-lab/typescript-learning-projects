abstract class Country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  private _statePrivacy: string;
  private _leader: string;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    _statePrivacy: string,
    _leader: string
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
    this._statePrivacy = _statePrivacy;
    this._leader = _leader;
  }

  public abstract populationGrowth(): number;
  public get privateData(): string {
    return this._statePrivacy
  }
  public set leader(newLeader: string) {
    this._leader = newLeader
  }
}

class OICCountry extends Country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivacy: string,
    leader: string
  ) {
    super(name, language, population, populationGrowthRate, statePrivacy, leader);
  }

  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
}

let Pakistan = new OICCountry(
  "Pakistan",
  "Urdu",
  300000000,
  2.5,
  "Pakistan's Private Data",
  "Pakistan's Leader"
);

console.info(Pakistan);

// Pakistan.name = "Islamic Republic of Pakistan"
// console.info(Pakistan);

// Error because this is a private property
// Pakistan._statePrivacy

// Success
// console.info(Pakistan.privateData)

// Error because _leader is private
// Pakistan._leader = "New Leader"

// Success because leader is a accessor and allows us to assign a new leader
Pakistan.leader = "New Leader"
console.info(Pakistan);

export {};
