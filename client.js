$(document).ready(onReady);

function onReady(){
  //add event listeners
  $('#genBtn').on('click', appendDiv);
  //need to attach to body and filter down for elements not yet on DOM
  $('body').on('click', '.swap', swapClicked);
  $('body').on('click', '.delete', deleteClicked);
}

var clicks = 0;

function appendDiv(){
  //add one to the clicks variable each time Generate btn is clicked
    clicks += 1;
  //add a div element to the body
  $('body').append('<div class="myDiv"><p>' + clicks + '</p><button class="swap">Swap</button><button class="delete">Delete</button></div>');
//appendThingsToDiv();
}

// function appendThingsToDiv(){
//   //add a <p> element that displays the tracked clicks
// $('.myDiv').append('<p>' + clicks + '</p>');
// // add the swap and delete buttons
// $('.myDiv').append('<button class="swap">Swap</button>');
// $('.myDiv').append('<button class="delete">Delete</button>');
// }

//clicking swap button changes the div's background-color to yellow
// function swapClicked(){
// var theDiv = $(this).parent();
//   if(theDiv.css('background-color') === 'red') {
//     theDiv.css('background-color', 'yellow');
//   }
//
//   if(theDiv.css('background-color') === 'yellow') {
//     theDiv.css('background-color', 'red');
//   }
// }

function swapClicked(){
  $(this).parent().css('background-color', 'yellow');
}

//clicking the delete button removes that entire div
function deleteClicked(){
  $(this).parent().remove();
}
