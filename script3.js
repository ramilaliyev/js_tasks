const path = "/users/download/index.html";

console.log(isHtml(path));

function isHtml (str) {
    var l = str.slice(-5).toLowerCase();
    if (l == ".html") {
        return true;
    } else {
        return false;
    }
}