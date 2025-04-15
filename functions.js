// write the header just once
function loadHeader() {
    var headerHTML = `
    <div id="title" style="text-align: center;">
        <h1>Maple Booster - Handmade Canadian Guitar Pedals</h1>
        <a href="index.html#about">About</a>
        <a href="index.html#maple-booster-rev3">Maple Booster (rev. 3)</a>
        <a href="index.html#maple-booster-rev3">Maple Booster (rev. 2)</a>
        <a href="index.html#maple-booster-rev3">Maple Booster (rev. 1)</a>
        <a href="index.html#deacy-pre-amp">Deacy (Pre)Amp</a>
        <a href="index.html#os">Open Source</a>
    </div>`
    document.getElementById('header').innerHTML = headerHTML;
    printRandomParagraph(); // Call the function after setting the inner HTML
}

// email to avoid spam
function setEmail() {
    var user = 'm.sepulveda';
    var domain = 'mail.utoronto.ca';
    var element = document.getElementById('email');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
}
document.addEventListener('DOMContentLoaded', setEmail);

function setEmail2() {
    var user = 'm.sepulveda';
    var domain = 'mail.utoronto.ca';
    var element = document.getElementById('email2');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
}
document.addEventListener('DOMContentLoaded', setEmail2);

window.onload = function () {
    function replaceQuotes(node) {
        if (node.nodeType === 3) { // Text node
            node.nodeValue = node.nodeValue.replace(/"([^"]*)"/g, '“$1”').replace(/'([^']*)'/g, '‘$1’');
        } else {
            var children = node.childNodes;
            for (var i = 0; i < children.length; i++) {
                replaceQuotes(children[i]);
            }
        }
    }

    replaceQuotes(document.body);
};
