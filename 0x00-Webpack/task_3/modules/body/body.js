const $ = require('jquery');
const _ = require('lodash');
import './body.css';

$(document).ready(function() {
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"</p>');
})

let numberCount = 0;
function updateCounter() {
  $('#count').html(`${numberCount} clicks on the button`);
  numberCount++;
}

$('button').on('click', _.debounce(updateCounter, 500));
