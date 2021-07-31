let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText)); // Lo que hacemos en el JSON nos servirá para transformar el string a objeto, para así poder acceder a sus valores.
            } else {
                const error = new Error("Error" + url_api);
                return callback(error, null);
            }
        }
    } //Nos hablará sobre que hacer dependiendo del estado en el que este nuestro request.
    xhttp.send(); //Se envía la solicitud.
}