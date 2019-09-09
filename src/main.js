import $ from 'jquery';
import { Age } from './planets.js';
import './styles.css';

$(document).ready(function(){
  $('.form').submit(function(event){
    let age = parseInt($('#earthAge').val());
    let genderPick = $('input:radio[name=genderPick]:checked').val();
    event.preventDefault();
    const newUser = new Age(age, genderPick);
    newUser.mercCalc(age);
    newUser.venusCalc(age);
    newUser.marsCalc(age);
    newUser.jupCalc(age);
    newUser.mercuryExpect();
    newUser.venusExpect();
    newUser.marsExpectancy();
    newUser.jupiterExpect();
    newUser.over1();
    newUser.over2();
    newUser.over3();
    newUser.over4();
    $("#earth").text(newUser.earth);
  });
});
