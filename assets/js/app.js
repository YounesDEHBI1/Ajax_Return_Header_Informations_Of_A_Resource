var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        document.getElementById("demo").innerHTML =
            this.getAllResponseHeaders();
    }
};

xhttp.open("GET", "assets/files/ajax_info.txt", true);

xhttp.send();