export function Age(earth, gender, mercury, venus, mars, jupiter){
  this.earth = earth;
  this.gender = gender;
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  this.expectancy = [];
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

};
