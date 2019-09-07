import $ from 'jquery';
import { Age } from './planets.js';

$(document).ready(function(){
  $('.form').submit(function(event){
    let age = parseInt($('#earthAge').val());
    event.preventDefault();
    const newUser = new Age(age);
    newUser.mercCalc(age);
    newUser.venusCalc(age);
    newUser.marsCalc(age);
    newUser.jupCalc(age);
    console.log("mercury " + newUser.mercury);
    console.log("venus " + newUser.venus);
    console.log("mars " + newUser.mars);
    console.log("jupiter " + newUser.jupiter);
  });
});
