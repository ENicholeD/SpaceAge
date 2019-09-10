import { Age } from './../src/planets.js';

describe('Age', function(){

  it('should test if the user age is being converted into mercury age', function(){
    let newUser = new Age(34, "male");
    newUser.mercCalc();
    expect(newUser.mercury).toEqual(142);
  });
  it('should test if the user age is being converted into venus age', function(){
    let newUser = new Age(34, "male");
    newUser.venusCalc();
    expect(newUser.venus).toEqual(55);
  });
  it('should test if the user age is being converted into mars age', function(){
    let newUser = new Age(34, "male");
    newUser.marsCalc();
    expect(newUser.mars).toEqual(18);
  });
  it('should test if the user age is being converted into jupiter age', function(){
    let newUser = new Age(34, "male");
    newUser.jupCalc();
    expect(newUser.jupiter).toEqual(3);
  });
  it('should test if the life expectancy is being converted to mercury life expectancy', function(){
    let second = new Age(34, "female");
    second.mercuryExpect();
    expect(second.mercExpect).toEqual(338);
  });
  it('should test if the life expectancy is being converted to venus life expectancy', function(){
    let second = new Age(34, "female");
    second.venusExpect();
    expect(second.venExpect).toEqual(131);
  });
  it('should test if the life expectancy is being converted to mars life expectancy', function(){
    let second = new Age(34, "female");
    second.marsExpectancy();
    expect(second.marsExpect).toEqual(43);
  });
  it('should test if the life expectancy is being converted to jupiter life expectancy', function(){
    let second = new Age(34, "female");
    second.jupiterExpect();
    expect(second.jupExpect).toEqual(7);
  });
  it('should test if the life expectancy is more than the life expactancy of mercury and by how much', function(){
    let second = new Age(99, "female");
    second.mercCalc();
    second.mercuryExpect();
    second.over1();
    expect(second.mercOver).toEqual(75);
  });
  it('should test if the life expectancy is more than the life expactancy of venus and by how much', function(){
    let second = new Age(99, "female");
    second.venusCalc();
    second.venusExpect();
    second.over2();
    expect(second.venOver).toEqual(29);
  });
  it('should test if the life expectancy is more than the life expactancy of mars and by how much', function(){
    let second = new Age(99, "female");
    second.marsCalc();
    second.marsExpectancy();
    second.over3();
    expect(second.marsOver).toEqual(10);
  });
  it('should test if the life expectancy is more than the life expactancy of jupiter and by how much', function(){
    let second = new Age(99, "female");
    second.jupCalc();
    second.jupiterExpect();
    second.over4();
    expect(second.jupOver).toEqual(1);
  });
});
