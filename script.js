let result = document.getElementById("bouton");

        function changeColor(color) {
            bouton.style.backgroundColor = color;
        }

        function change() {
            changeColor('yellow');
            result.innerHTML = "Background Color changed";
        }  