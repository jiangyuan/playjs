function toBody(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
}

function get(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        xhr.onerror = function () {
            reject(Error('Netword error!'));
        };

        xhr.open('GET', url);
        xhr.send();
    }).catch(function(error) {
        console.log(error);
    });
}

function getJSON(url) {
    return get(url).then(JSON.parse);
}