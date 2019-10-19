/**
 * Do the request via AJAX and execute the callback function
 * @param {*} method 
 * @param {*} url 
 * @param {*} callback 
 */
function fetch(method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var results = JSON.parse(xhr.responseText);
            callback(results);
        }
    }

    xhr.send();
}
