import { Age } from './../src/planets.js';

describe('Age', function(){

  it('should test if the user age is being converted into planetary age', function(){
    let newUser = new Age(34);
    newUser.mercCalc();
    newUser.venusCalc();
    newUser.marsCalc();
    newUser.jupCalc();
    expect(newUser.mercury).toEqual(142);
    expect(newUser.venus).toEqual(55);
    expect(newUser.mars).toEqual(18);
    expect(newUser.jupiter).toEqual(3);
  });
  it('should test if the life expectancy is being converted', function(){
    let second = new Age(34, "female");
    second.mercuryExpect();
    second.venusExpect();
    second.marsExpectancy();
    second.jupiterExpect();
    expect(second.mercExpect).toEqual(338);
    expect(second.venExpect).toEqual(131);
    expect(second.marsExpect).toEqual(43);
    expect(second.jupExpect).toEqual(7);
  });
});
