var $ = require("jquery");
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$('#count').text(`${count} clicks on the button`);
const fun = _.debounce(updateCounter, 500);
$(':button').on('click', fun);
