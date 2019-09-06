class UserAge{
  constructor(earth){
    this.earth = earth;
    this.gender = gender;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.expectancy = [];
    const planetae = this;
    const mercNum = .24;
    const venNum = .62;
    const marsNum = 1.88;
    const jupNum = 11.86;
    let earthYears = planetae.earthYears;

    mercCalc(earthYears){
      let mercYears = earthYears / mercNum;
    }
    return planetae.mercury;

    venusCalc(earthYears){
      let venusYears = earthYears / venNum;
    }
    return planetae.venus;

    marsCalc(earthYears){
      let marsYears = earthYears / marsNum;
    }
    return planetae.mercury;

    jupCalc(earthYears){
      let jupYears = earth / jupNum;
    }
    return planetae.jupiter;
  }
  // lifeExpect(){
  //   const maleEarth = 76;
  //   const femaleEarth = 81;
  //   if(planetae.gender === "male"){
  //     let
  //   }
  // }
  }
}
