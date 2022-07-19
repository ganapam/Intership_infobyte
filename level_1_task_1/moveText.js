var dom, x, y, finalx = 200,
    finaly = 400;

function initText() {
    dom = document.getElementById('theText').style;
    var x = dom.left;
    var y = dom.top;
    x = x.match(/\d+/);
    y = y.match(/\d+/);
    moveText(x, y);
}

function moveText(x, y) {
    if (x != finalx)
        if (x > finalx) x--;
        else if (x < finalx) x++;
    if (y != finaly)
        if (y > finaly) y--;
        else if (y < finaly) y++;
    if ((x != finalx) || (y != finaly)) {
        dom.left = x + "px";
        dom.top = y + "px";
        setTimeout("moveText(" + x + "," + y + ")", 100);
    }
}