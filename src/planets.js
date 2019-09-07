export function Age(earth, gender, mercury, venus, mars, jupiter){
  this.earth = earth;
  this.gender = gender;
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  this.female = 81;
  this.male = 76;
}
Age.prototype.mercCalc = function() {
  const mercNum = .24;
  this.mercury = Math.round(this.earth / mercNum);
  return this.mercury;
};

Age.prototype.venusCalc = function() {
  const venNum = .62;
  this.venus = Math.round(this.earth / venNum);
  return this.venus;
};

Age.prototype.marsCalc = function() {
  const marsNum = 1.88;
  this.mars = Math.round(this.earth / marsNum);
  return this.mercury;
};

Age.prototype.jupCalc = function() {
  const jupNum = 11.86;
  this.jupiter = Math.round(this.earth / jupNum);
  return this.jupiter;
};
Age.prototype.lifeExpect = function() {
  const mercNum = .24;
  const venNum = .62;
  const marsNum = 1.88;
  const jupNum = 11.86;
  if(this.gender === "female"){
    let expectMerc = Math.round(this.female / mercNum);
    let expectVen = Math.round(this.female / venNum);
    let expectMar = Math.round(this.female / marsNum);
    let expectjup = Math.round(this.female / jupNum);
    this.allExpect = [expectMerc, expectVen, expectMar, expectjup];
    console.log(this.allExpect);
  }
  if (this.gender === "male") {
    let expectMerc = Math.round(this.male / mercNum);
    let expectVen = Math.round(this.male / venNum);
    let expectMar = Math.round(this.male / marsNum);
    let expectjup = Math.round(this.male / jupNum);
    let together = [expectMerc, expectVen, expectMar, expectjup];
    this.allExpect = together;
    console.log(this.allExpect);
    return this.allExpect;

  }
};
