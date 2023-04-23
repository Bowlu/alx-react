const $ = require('jquery');
const _ = require('lodash');

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});

let numberCount = 0;
function updateCounter() {
  $('#count').html(`${numberCount} clicks on the button`);
  numberCount++;
}

$('button').on('click', _.debounce(updateCounter, 500));