var collapseElements = document.querySelectorAll('.collapse');

// Attach event listener to each collapse element
collapseElements.forEach(function (collapseElement) {
  collapseElement.addEventListener('show.bs.collapse', function () {
    // Collapse all other elements except the one being opened
    collapseElements.forEach(function (element) {
      if (element !== collapseElement) {
        $(element).collapse('hide');
      }
    });
  });
});  

  // Get all buttons with the class 'color-button'
var buttons = document.querySelectorAll('.questions-divs');

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    changeColor(this);
  });
});

function changeColor(button) {
  var buttons = document.querySelectorAll('.questions-divs');
  
  buttons.forEach(function(btn) {
    btn.style.backgroundColor = '#FFF';
    btn.style.color = "#1239ac"
});
  
  button.style.backgroundColor = '#1239ac'; // Change to the desired color
  button.style.color = "#fff"
}

