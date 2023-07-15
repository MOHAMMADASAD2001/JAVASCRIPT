var text = document.getElementById("text");
        function font_family() {
            let family = document.getElementById("family");
            let family_value = family.options[family.selectedIndex].value;
            if (family_value == 1) {
                text.style.fontFamily = "Times New Roman', Times, serif;";
            } else if (family_value == 2) {
                text.style.fontFamily = "fantasy";
            } else {
                text.style.fontFamily = "Arial, Helvetica, sans-serif";
            }
        }
        function font_weight() {
            let weight = document.getElementById("weight");
            let weight_value = weight.options[weight.selectedIndex].value;
            if (weight_value == 1) {
                text.style.fontSize = "10px";
            } else if (weight_value == 2) {
                text.style.fontSize = "15px";
            } else if (weight_value == 3) {
                text.style.fontSize = "20px";
            } else {
                text.style.fontSize = "25px";
            }
        }
        function Italic_box() {
            let Italic = document.getElementById("Italic")
            if (Italic.checked == true) {
                text.style.fontStyle = "italic";
            } else {
                text.style.fontStyle = "normal";
            }
        }
        function Bold_box() {
            let Bold = document.getElementById("Bold")

            if (Bold.checked == true) {
                text.style.fontWeight = "bold";
            } else {
                text.style.fontWeight = "lighter";
            }
        }
        function Underline_box() {
            let Underline = document.getElementById("Underline")
            if (Underline.checked == true) {
                text.style.textDecoration = "underline";
            } else {
                text.style.textDecoration = "none";
            }
        }