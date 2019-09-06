export class UserAge{
  constructor(earth, gender, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.gender = gender;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.expectancy = [];
  }
    mercCalc() {
      const mercNum = .24;
      const planetae = this;
      planetae.earth / mercNum;
      return planetae.mercury;
    }

    venusCalc() {
      const venNum = .62;
      const planetae = this;
      planetae.earth / venNum;
      return planetae.venus;
    }

    marsCalc() {
      const marsNum = 1.88;
      const planetae = this;
      planetae.earth / marsNum;
      return planetae.mercury;
    }

    jupCalc() {
      const jupNum = 11.86;
      const planetae = this;
      planetae.earth / jupNum;
      return planetae.jupiter;
    }
}
