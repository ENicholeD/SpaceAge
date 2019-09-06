import $ from 'jquery';
import { Age } from './planets-logic.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(age){
  $('.form').submit(function(event){
    event.preventDefault();
    let age = parseInt($('#earthAge').val());
    const newUser = new Age(age);
    console.log(newUser.mercCalc(age));
    // let mercuryConvert = newUser.mercCalc();
    // $("#merc").text(mercuryConvert);
  });
});
