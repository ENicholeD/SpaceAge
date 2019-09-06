class UserAge{
  constructor(earth){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;

    const planetae = this;
    let earthYears = planetae.earthYears;

    mercCalc(earthYears){
      let mercYears = earthYears / .24;
    }
    return planetae.mercury;

    venusCalc(earthYears){
      let venusYears = earthYears / .62;
    }
    return planetae.venus;

    marsCalc(earthYears){
      let marsYears = earthYears / 1.88;
    }
    return planetae.mercury;
  }
}
