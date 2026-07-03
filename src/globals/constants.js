const rawBaseUrl = process.env.NEXT_PUBLIC_PUBLIC_URL || process.env.PUBLIC_URL || "";
const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

export function publicUrlFor(path) {
    return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');

        script.src = (
            fromPublic === undefined ||
            fromPublic == null ||
            fromPublic
        ) ? publicUrlFor(src) : src;

        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
    })
};