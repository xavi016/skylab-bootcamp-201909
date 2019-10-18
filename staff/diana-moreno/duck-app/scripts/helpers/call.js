function call(method, url, callback) {
  fetch(method, url, function(response) {
    if (response.readyState == 4) { // && response.status == 201 no todas serán correctas!
      var results = JSON.parse(response.responseText);

      callback(results);
    }
  });
};
