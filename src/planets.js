export function Age(earth, sex, mercury, venus, mars, jupiter, mercExpect, venExpect, marsExpect, jupExpect, mercOver, venOver, marsOver, jupOver){
// current age on all planets
  this.earth = earth;
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars;
  this.jupiter = jupiter;
  // gender determins life expectancy
  this.sex = sex;
  this.female = 81;
  this.male = 76;
  // the difference between earth years and planet years
  this.mercNum = .24;
  this.venNum = .62;
  this.marsNum = 1.88;
  this.jupNum = 11.86;
  // life expectency converted to all planet years
  this.mercExpect = mercExpect;
  this.venExpect = venExpect;
  this.marsExpect = marsExpect;
  this.jupExpect = jupExpect;
  // if the user is over the expectancy, this tells you by how much
  this.mercOver = mercOver;
  this.venOver = venOver;
  this.marsOver = marsOver;
  this.jupOver = jupOver;
}
// coversion to mercury years
Age.prototype.mercCalc = function() {
  this.mercury = Math.round(this.earth / this.mercNum);
  return this.mercury;
};
// conversion to venus years
Age.prototype.venusCalc = function() {
  this.venus = Math.round(this.earth / this.venNum);
  return this.venus;
};
// conversion to mars years
Age.prototype.marsCalc = function() {
  this.mars = Math.round(this.earth / this.marsNum);
  return this.mercury;
};
// conversion to jupiter years
Age.prototype.jupCalc = function() {
  this.jupiter = Math.round(this.earth / this.jupNum);
  return this.jupiter;
};
// life expectancy for males and females on mercury
Age.prototype.mercuryExpect = function() {
  if (this.sex === "male") {
    this.mercExpect = Math.round(this.male / this.mercNum);
    return this.mercExpect;
  }
  if(this.sex === "female"){
    this.mercExpect = Math.round(this.female / this.mercNum);
    return this.mercExpect;
  }
};
// life expectacy for males and females on venus
Age.prototype.venusExpect = function(){
  if (this.sex === "male") {
    this.venExpect = Math.round(this.male / this.venNum);
    return this.venExpect;
  }
  if(this.sex === "female"){
    this.venExpect = Math.round(this.female / this.venNum);
    return this.venExpect;
  }
};
// life expectancy for males and females on mars
Age.prototype.marsExpectancy = function() {
  if (this.sex === "male") {
    this.marsExpect = Math.round(this.male / this.marsNum);
    return this.marsExpect;
  }
  if(this.sex === "female"){
    this.marsExpect = Math.round(this.female / this.marsNum);
    return this.marsExpect;
  }
};
// life expectacy for males and females on jupiter
Age.prototype.jupiterExpect = function () {
  if (this.sex === "male") {
    this.jupExpect = Math.round(this.male / this.jupNum);
    return this.jupExpect;
  }
  if(this.sex === "female"){
    this.jupExpect = Math.round(this.female / this.jupNum);
    return this.jupExpect;
  }
};
// over expectacy mercury
Age.prototype.over1 = function(){
  if(this.mercury > this.mercExpect){
    this.mercOver = this.mercury - this.mercExpect;
    return this.mercOver;
  } else {
    this.mercOver = 0;
    return this.mercOver;
  }
};
// over expectacy venus
Age.prototype.over2 = function(){
  if(this.venus > this.venExpect){
    this.venOver = this.venus - this.venExpect;
    return this.venOver;
  } else {
    this.venOver = 0;
    return this.venOver;
  }
};
// over expectacy mars
Age.prototype.over3 = function(){
  if(this.mars > this.marsExpect){
    this.marsOver = this.mars - this.marsExpect;
    return this.marsOver;
  } else {
    this.marsOver = 0;
    return this.marsOver;
  }
};
// over expectacy jupiter
Age.prototype.over4 = function(){
  if(this.jupiter > this.jupExpect){
    this.jupOver = this.jupiter - this.jupExpect;
    return this.jupOver;
  } else {
    this.jupOver = 0;
    return this.jupOver;
  }
};
