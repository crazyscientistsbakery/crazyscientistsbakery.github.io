function redraw() {
    function choose(choices) {
      var index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }
    console.log("redraw");

    var posts = document.querySelectorAll(".post-wrapper");
    var cur, i;
    var acc = 12, tval = 0;
    for(i = 0; i < posts.length; i++) {
        cur = posts[i];
        console.log(acc, tval);
        if (cur.style.display === "none") continue;
        if (acc === 12) { 
            tval = choose([12, 6, 4]);
            acc -= tval;
        } else {
            tval = acc;
            acc = 12;
        }
        cl = [].filter.call(cur.classList, function (el) {
            return el.indexOf("col-md") === -1;
        });
        cur.className = cl.join(' ');
        cur.className += " col-md-" + tval;

    }
}

function toggle (elem) {
    // current1 = elem.style.visibility;
    // current2 = elem.style.opacity;
    // elem.style.visibility = current1 === "visible" ? "hidden" : "visible";
    // elem.style.opacity = current2 === "1" ? "0" : "1";
    setTimeout(function() {
        current = elem.style.display;
        elem.style.display = current === "none" ? "" : "none";
    }, 0);
}

function toggleAll (elem) {
    if (typeof elem === "string")
        classname = elem
    else
        classname = elem.className.split(" ")[0];
    elems = document.getElementById("article-container").getElementsByClassName(classname);
    for (i = 0; i < elems.length; i++) {
        toggle(elems[i]);
    }

    btn = document.querySelector("button." + classname);
    if (btn) {
        if (! btn.style.opacity)
            btn.style.opacity = 1;
        btn.style.opacity = btn.style.opacity > 0.5 ? 0.5 : 1;
        if (btn.classList.contains('btn-group-head')) {
            childs = btn.parentNode.childNodes;
            childs.forEach(function (el) {
                if (el.nodeType === 1 && el.classList.contains('btn') && ! el.classList.contains('btn-group-head')) {
                    if (!el.style.display) 
                        el.style.display = 'none';
                    if (! el.style.opacity)
                        el.style.opacity = 1;
                    el.style.display = el.style.display == 'none' ? 'inline' : 'none';
                    el.style.opacity = el.style.opacity > 0.5 ? 0.5 : 1;
                }
            });
        }
    }
    redraw();
}

window.onload = function() {
    if (window.location.hash) {
        var hash = window.location.hash.split('#');
        var flag = false;
        hash.shift();
        categories = ['world', 'history', 'science', 'design', 'nutrition'];
        subcategories = ['biology', 'physics', 'chemistry'];
        [].forEach.call(hash, function(el) {
            if ((categories + subcategories).indexOf(el) !== -1 ) {
                flag = true;
                toggleAll(el)
            }
        });

        if (flag) {
            categories.forEach(function(el) {
                toggleAll(el)
            });
        }

    }
}
