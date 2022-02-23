export const fetchFromServer = async (url) => {
    try {
        return new Promise((success, fail) => {

            var method = 'GET';
            var xhr = createCORSRequest(method, url);

            xhr.onload = function () {
                // Success code goes here.
                // console.log(`Error code ${xhr.responseText}`);
                success(xhr.responseText);
            };

            xhr.onerror = function () {
                // Error code goes here.
                fail('err');
            };

            xhr.send();
        })
    } catch (err) {
        console.log(err)
    }
    return null;
}
var createCORSRequest = function (method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
};


export const EVENTS = {
    onContextMenu: () => { },
    valueFormatter: () => {
        formatter: (value) => value
    },
    openWebUrl: (url) => window.open(url, "_blank"),
    onSelectionChange: () => { },
    onHover: () => { },
    updateFocusMode: () => { },
}

