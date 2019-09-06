export class Age{
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
    const world = this;
    world.earth / mercNum;
    return world.mercury;
  }

  venusCalc() {
    const venNum = .62;
    const world = this;
    world.earth / venNum;
    return world.venus;
  }

  marsCalc() {
    const marsNum = 1.88;
    const world = this;
    world.earth / marsNum;
    return world.mercury;
  }

  jupCalc() {
    const jupNum = 11.86;
    const world = this;
    world.earth / jupNum;
    return world.jupiter;
  }
}
