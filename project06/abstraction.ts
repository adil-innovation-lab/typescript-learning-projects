abstract class Country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
  }

  public abstract populationGrowth(): number;
}

class OICCountry extends Country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    super(name, language, population, populationGrowthRate);
  }

  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);

// let UAE = new OICCountry("UAE","Arabic",5000000,2)
// console.info(UAE)

Pakistan.populationGrowth();

console.info(Pakistan);

Pakistan.populationGrowth();

console.info(Pakistan);