/*
 
 @authors leon <kairyou@qq.com>
          you
*/

YUI().use('node', function (Y) {
    // Node is available and ready for use. Add implementation
    // code here.
    Y.log(Y.all("iframe").item(0));
    var display, index;
    next = function () {
        var url = ["a.html", "b.html", "c.html", "d.html", "e.html"];
        var l = Y.all("iframe")._nodes.length;
        display = Y.all("iframe").getStyle("display");
        index = display.indexOf("inline");
        var nifr = document.createElement("iframe");
        //nifr.setAttribute("id", "aa");
        nifr.setAttribute("src", url[l]);
        if (index + 1 < display.length) {
            Y.all("iframe").item(index + 1).setStyle("display", "inline").siblings("iframe").setStyle("display", "none");
            //Y.all("iframe")._nodes[index + 1].style.display = "inline";
            //Y.all("iframe")._nodes[index].style.display = "none";
        } else {
            Y.one("#popup").appendChild(nifr).siblings("iframe").setStyle("display", "none");
        }
        (index + 2 === url.length) ? Y.one("#n").setStyle("display", "none") : Y.one("#p").setStyle("display", "inline");
        //Y.log(Y.all("iframe").getStyle("display"));
        //Y.log(Y.all("iframe").getStyle("display").indexOf("inline"));
        //Y.log(Y.all("iframe").getStyle("display").length);
    };
    prev = function () {
        display = Y.all("iframe").getStyle("display");
        index = display.indexOf("inline");
        //Y.all("iframe").setStyle("display", "none");
        //Y.all("iframe").item(index - 1).setStyle("display", "inline");
        Y.all("iframe").item(index - 1).setStyle("display", "inline").siblings("iframe").setStyle("display", "none");
        //Y.one("#p").setStyle("display", "inline");
        Y.one("#n").setStyle("display", "inline");
        (index - 1 === 0) ? Y.one("#p").setStyle("display", "none") : Y.one("#p").setStyle("display", "inline");
    };
});
/*
var nstep = Y.all(".ifr")._nodes.length;
var url = [];
.setStyle("display", "block");
*/