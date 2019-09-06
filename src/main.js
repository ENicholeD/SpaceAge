import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { UserAge } from './planets-logic.js';
$(document).ready(function(){
  $('.form').submit(function(event){
    event.preventDefault();
    let newUser = new UserAge();
  });
});
