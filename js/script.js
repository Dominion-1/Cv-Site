// $(document).on("scroll",
//     function() {
//         var pageTop = $(document).scrollTop();
//         var pageBottom = pageTop + $(window).height();
//         var tags = $(".tag");

//         for (var i = 0; i < tags.length; i++) {
//             var tag = tags[i];
//             if ($(tag).position().top < pageBottom) {
//                 $(tag).addClass("visible");
//             }
//             else {
//                 $(tag).removeClass("visible"); 
//             }
//         }
//     }
// );
$(document).ready(function() {
    $(window).scroll(function() {
        $('.tag').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });
});

function dropdownmenu() {
    var x = document.getElementById("dropdownclick");
    if (x.className === "topnavb") {
        x.className += " responsive";
        // change topnavb to topnavb.responsive
    } else {
        x.className = "topnavb";
    }
}