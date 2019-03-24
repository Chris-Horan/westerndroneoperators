window.addEventListener("load", function() {
    scrollAdjust();
})

window.addEventListener("scroll", function() {
    scrollAdjust();
})

function scrollAdjust() {
    var fromTop = window.pageYOffset;
    if(fromTop > 150) {
        textBox1.className = "hide disappear";
    } else textBox1.className = "show";
    if(fromTop > 200 && fromTop < 1300) {
        text2.className = "show";
    } else text2.className = "hide";
    if(fromTop > 900 && fromTop < 2000) {
        text3.className = "show";
    } else text3.className = "hide";
    if(fromTop > 1600 && fromTop < 2800) {
        text4.className = "show";
    } else text4.className = "hide";
}
