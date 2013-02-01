/*
 
 @authors leon <kairyou@qq.com>
          you
*/

YUI().use('json-stringify', 'node', 'event', function (Y) {
    //function
    var next, prev, show, offset, hasAllRendered, jsonString, link, new_iframe;
    //jsonstring
    offset = 0;
    hasAllRendered = false;
    jsonString = [
        {
            id: "0",
            url: "a.html",
            hasRendered: false
        },
        {
            id: "1",
            url: "b.html",
            hasRendered: false
        },
        {
            id: "2",
            url: "c.html",
            hasRendered: false
        },
        {
            id: "3",
            url: "d.html",
            hasRendered: false
        }
    ];

    show = function () {
        link = jsonString[offset].url;
        Y.log(link);
        jsonString[offset].hasRendered = true;
        new_iframe = document.createElement("iframe");
        new_iframe.setAttribute("src", link);
        Y.one("#popup").appendChild(new_iframe).addClass("show");
    };
    show();
    //next
    next = function () {
        offset += 1;
        link = jsonString[offset].url;
        Y.log(jsonString[offset].hasRendered);
        Y.log("offset:" + offset);
        Y.log(link);
        if (jsonString[offset].hasRendered === true) {
            //next
            Y.all("iframe").item(offset).setStyle("display", "inline").siblings("iframe").setStyle("display", "none");
        } else {
            //create
            new_iframe = document.createElement("iframe");
            new_iframe.setAttribute("src", link);
            Y.one("#popup").appendChild(new_iframe).addClass("show").siblings("iframe").removeClass("show");
        }
        //prev_button hide and show home
        if (offset  === jsonString.length - 1) {
            Y.one(".next_button").setStyle("display", "none");
            Y.one(".finish_button").setStyle("display", "inline");
        } else {
            Y.one(".prev_button").setStyle("display", "inline");
        }
        jsonString[offset].hasRendered = true;
        //counter
        //var counter = offset++;
    };

    //prev
    prev = function () {
        Y.log("offset:" + offset);
        Y.log(jsonString[offset - 1].hasRendered);
        //prev
        Y.all("iframe").item(offset - 1).setStyle("display", "inline").siblings("iframe").setStyle("display", "none");
        //counter
        offset -= 1;
        Y.log("offset-:" + offset);
        //next_button show
        Y.one(".next_button").setStyle("display", "inline");
        if (offset === 0) {
            Y.one(".prev_button").setStyle("display", "none");
        } else {
            Y.one(".prev_button").setStyle("display", "inline");
            Y.one(".finish_button").setStyle("display", "none");
        }
    };

    //click event
    Y.one(".prev_button").on("click", prev);
    Y.one(".next_button").on("click", next);
    //log
    Y.log("jsonString_length:" + jsonString.length);
});