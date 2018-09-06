# Responsive-templates-Html5-Css3-Js-

-----------------------------------------------
jQuery.NiceScroll
------------------
simple installation and activation, it works with NO modification of your code. (some exceptions can happen, so you can write to me)
very stylish scrollbars, with no occupation on your window (original browser scrollbars need some of page space and reduces window/div usable width)
you can style main document scrollbar (body) too!! (not all device/browser support this feature)
on all browsers you can scroll: dragging the cursor, mouse wheel (speed customizable), keyboard navigation (cursor keys, pagup/down keys, home/end keys)
scroll is smooth (as modern tablet browsing), speed is customizable
zoom feature
hardware accelerated scroll (where available)
animation frame support for smoth scrolling and cpu-saving
dragging scroll mode with scrolling momentum (as touch device)
tested for all major browsers desktop and mobile versions
support for touch devices
support for multi-input devices (MSPointer/Pointer support)
compatible with many other browsers and webkit derivated!
scrollbar has a lot a customizable features
native scroll events are working yet
fully integrated with jQuery
compatibile with jQuery UI, jQuery Touch, jQuery Mobile

-------------------------------------------------------------------
DEPENDENCIES
------------
It's a plugin for the jquery framework, you need to include jquery in your scripts. it works with jQuery 1.x / 2.x / 3.x branch (slim version don't works)

INSTALLATION Put loading script tag after jquery script tag and loading the zoom image in the same folder of the script:
<script src="jquery.nicescroll.js"></script>
When you use zoom feature, copy image "zoomico.png" in the same folder of jquery.nicescroll.js.

HOW TO USE
Initialize nicescroll ALWAYS in (document) ready statement.

// 1. Simple mode, it styles document scrollbar:
$(function() {  
    $("body").niceScroll();
});

// 2. Instance with object returned:
var nice = false;
$(function() {  
    nice = $("body").niceScroll();
});

// 3. Style a DIV and change cursor color:
$(function() {  
    $("#thisdiv").niceScroll({cursorcolor:"#00F"});
});

// 4. DIV with "wrapper", formed by two divs, the first is the vieport, the latter is the content:
$(function() {
    $("#viewportdiv").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});
});

// 5. Get nicescroll object:
var nice = $("#mydiv").getNiceScroll();

// 6. Hide scrollbars:
$("#mydiv").getNiceScroll().hide();

// 7. Check for scrollbars resize (when content or position have changed):
$("#mydiv").getNiceScroll().resize();

// 8. Scrolling to a position:
$("#mydiv").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis
$("#mydiv").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis

----------------------------------------
*Web Site: nicescroll.areaaperta.com
-----------------------------------
-------------
---
-
