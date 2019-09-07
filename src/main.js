import $ from 'jquery';
import { Age } from './planets.js';

$(document).ready(function(){
  $('.form').submit(function(event){
    let age = parseInt($('#earthAge').val());
    let genderPick = $('input:radio[name=genderPick]:checked').val();
    event.preventDefault();
    const newUser = new Age(age);
    newUser.mercCalc(age);
    newUser.venusCalc(age);
    newUser.marsCalc(age);
    newUser.jupCalc(age);
    newUser.lifeExpect(genderPick);
    console.log(newUser.allExpect);
  });
});
