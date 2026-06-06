

var currentState = true;
function switchTheme() {
    if (currentState) {
        document.getElementById('css_file').href = "visible.css";
    } 
    else{
        // document.getElementById('css_file').href = "style.css";
      window.location.href = "hub.html"
    }
    currentState = !currentState;
}
let changeButton = document.querySelector(".button");
changeButton.addEventListener('click', switchTheme);

