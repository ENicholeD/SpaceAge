export class Age {
  constructor(earth, sex){
    this.earth = earth;
    this.sex = sex;
    this.female = 81;
    this.male = 76;
    this.mercNum = .24;
    this.venNum = .62;
    this.marsNum = 1.88;
    this.jupNum = 11.86;
  }
  // coversion to mercury years
  mercCalc() {
    this.mercury = Math.round(this.earth / this.mercNum);
  }
  // conversion to venus years
  venusCalc() {
    this.venus = Math.round(this.earth / this.venNum);
  }
  // conversion to mars years
  marsCalc() {
    this.mars = Math.round(this.earth / this.marsNum);
  }
  // conversion to jupiter years
  jupCalc() {
    this.jupiter = Math.round(this.earth / this.jupNum);
  }
  // life expectancy for males and females on mercury
  mercuryExpect() {
    if (this.sex === "male") {
      this.mercExpect = Math.round(this.male / this.mercNum);
    }
    if(this.sex === "female"){
      this.mercExpect = Math.round(this.female / this.mercNum);
    }
  }
  // life expectacy for males and females on venus
  venusExpect(){
    if (this.sex === "male") {
      this.venExpect = Math.round(this.male / this.venNum);
    }
    if(this.sex === "female"){
      this.venExpect = Math.round(this.female / this.venNum);
    }
  }
  // life expectancy for males and females on mars
  marsExpectancy() {
    if (this.sex === "male") {
      this.marsExpect = Math.round(this.male / this.marsNum);
    }
    if(this.sex === "female"){
      this.marsExpect = Math.round(this.female / this.marsNum);
    }
  }
  // life expectacy for males and females on jupiter
  jupiterExpect() {
    if (this.sex === "male") {
      this.jupExpect = Math.round(this.male / this.jupNum);
    }
    if(this.sex === "female"){
      this.jupExpect = Math.round(this.female / this.jupNum);
    }
  }
  // over expectacy mercury
  over1(){
    if(this.mercury > this.mercExpect){
      this.mercOver = this.mercury - this.mercExpect;
    } else {
      this.mercOver = 0;
    }
  }
  // over expectacy venus
  over2(){
    if(this.venus > this.venExpect){
      this.venOver = this.venus - this.venExpect;
    } else {
      this.venOver = 0;
    }
  }
  // over expectacy mars
  over3(){
    if(this.mars > this.marsExpect){
      this.marsOver = this.mars - this.marsExpect;
    } else {
      this.marsOver = 0;
    }
  }
  // over expectacy jupiter
  over4(){
    if(this.jupiter > this.jupExpect){
      this.jupOver = this.jupiter - this.jupExpect;
    } else {
      this.jupOver = 0;
    }
  }
}
