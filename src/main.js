import $ from 'jquery';
import { Age } from './planets.js';
import './styles.css';

$(document).ready(function(){
  $('.form').submit(function(event){

    let age = parseInt($("#earthAge").val());
    let genderPick = $('input:radio[name=genderPick]:checked').val();

    event.preventDefault();

    const newUser = new Age(age, genderPick);
    
    console.log(age);
    newUser.mercCalc();
    newUser.venusCalc();
    newUser.marsCalc();
    newUser.jupCalc();
    newUser.mercuryExpect();
    newUser.venusExpect();
    newUser.marsExpectancy();
    newUser.jupiterExpect();
    newUser.over1();
    newUser.over2();
    newUser.over3();
    newUser.over4();
    $("#earth").text("You are: " + newUser.earth);
    $("#mercury").text("Current age: " + newUser.mercury);
    $("#mercExpect").text("Life expectancy: " + newUser.mercExpect);
    $("#mercOver").text("Did you live past the expetancy? by how many years? " + newUser.mercOver);
    $("#venus").text("Current age: " + newUser.venus);
    $("#venExpect").text("Life expectancy: " + newUser.venExpect);
    $("#venOver").text("Did you live past the expetancy? by how many years? " + newUser.venOver);
    $("#mars").text("Current age: " + newUser.mars);
    $("#marsExpect").text("Life expectancy: " + newUser.marsExpect);
    $("#marsOver").text("Did you live past the expetancy? by how many years? " + newUser.marsOver);
    $("#jupiter").text("Current age: " + newUser.jupiter);
    $("#jupExpect").text("Life expectancy: " + newUser.jupExpect);
    $("#jupOver").text("Did you live past the expetancy? by how many years? " + newUser.jupOver);
    $(".ageConvert").show();
  });
});
