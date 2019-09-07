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
});
