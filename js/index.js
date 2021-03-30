console.log('Your index.js file is loaded correctly!');

// action goes here!!

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
$('#mobile-icon').on('click', function () {
  document.getElementById('myDropdown').classList.toggle('show');
  console.log('You clickd on #mobile-icon');
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('#mobile-icon')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
