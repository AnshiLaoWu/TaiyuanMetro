function mainMenu() {
  document.getElementById("mainmenu").classList.toggle("show");
}
function menu1() {
  document.getElementById("menu1").classList.toggle("show");
  var dropdowns = document.getElementsByClassName("menu2");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
function menu2() {
  document.getElementById("menu2").classList.toggle("show");
  var dropdowns = document.getElementsByClassName("menu1");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.mainmenubtn') && !event.target.matches('.menu1btn') && !event.target.matches('.menu2btn')) {
    var dropdowns = document.getElementsByClassName("mainmenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    dropdowns = document.getElementsByClassName("menu1");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    dropdowns = document.getElementsByClassName("menu2");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}