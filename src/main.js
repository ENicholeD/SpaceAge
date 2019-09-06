import $ from 'jquery';
import { UserAge } from './planets-logic.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('.form').submit(function(event){
    event.preventDefault();
    let age = parseInt($('#earthAge').val());
    let newUser = new UserAge(age);
    let mercuryConvert = newUser.mercCalc();
    $("#merc").text(mercuryConvert);
  });
});
