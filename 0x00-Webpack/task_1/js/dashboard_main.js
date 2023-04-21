import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});

let count_track = 0;
function updateCounter() {
    $('#count').html(`${count_track} clicks on the button`);
    count_track++;
}

$('button').on('click', _.debounce(updateCounter, 100));