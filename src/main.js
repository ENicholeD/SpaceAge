import $ from 'jquery';
import { Age } from './planets.js';

$(document).ready(function(){
  $('.form').submit(function(event){
    let age = parseInt($('#earthAge').val());
    event.preventDefault();
    const newUser = new Age(age);
    let result = newUser.mercCalc(age);

    console.log(result);
    // let mercuryConvert = newUser.mercCalc();
    // $("#merc").text(mercuryConvert);
  });
});
