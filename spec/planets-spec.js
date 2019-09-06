import { Age } from './../src/planets.js';

describe('Age', function(){

  it('should test if the user age is being converted into planetary age', function(){
    let newUser = new Age(24);
    expect(newUser.mercury).toEqual(100);
    expect(newUser.venus).toEqual(39);
    expect(newUser.mars).toEqual(13);
    expect(newUser.jupiter).toEqual(2);
  });
});
