//your JS code here. If required.

let cap= document.getElementById("fname");
 cap.addEventListener("blur", function() {
            this.value = this.value.toUpperCase();
        });