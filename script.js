$(document).ready(function () {
    navBarInit();
    checkScrollPosition();
    initMobileNavEvent();
    initContacts();
    getIcons();
    projectDescription_Event();
});


// Init mobile navigation button
function initMobileNavEvent(){
    $(".mobileNavBtn").on("click", function () {
        if( $(".mobileNavBtn i").hasClass("fas fa-bars") ){
            $(".mobileNavBtn i").removeClass("fas fa-bars").addClass("far fa-times-circle");
            $(".stickyNav, .navButtons").addClass("open");
        }else{
            $(".mobileNavBtn i").removeClass("far fa-times-circle").addClass("fas fa-bars");
            $(".stickyNav, .navButtons").removeClass("open");
        }
    });
}

// Set the corresponding nav button to active
function navBarInit(){
    $(".navBtn").on("click", function () {
        $(".navBtn").removeClass("active");
        $(this).addClass("active");
    });
}

// Set the corresponding nav button to active on scroll
function checkScrollPosition(){
    $(".container").on("scroll", function () {
        $("section").each(function(i, obj) {
            let sectionID = "#"+$(this).attr("id");
            if( $(sectionID).isInViewport() ){
                $(`.navBtn[href="${sectionID}"]`).trigger("click");
            }
        });
    });
}

// Contact msg send button capture
function contactSendBtn_Event(){
    $(".sendContactMsg").on("click", function () {
        $(".contactForm").trigger("submit");
    });
}

// Reveal project description
function projectDescription_Event(){
    $(".arrowUpBtn").on("click", function () {
        $(this).closest(".projectCardBody").toggleClass("open");
        if( $(this).closest(".projectCardBody").hasClass("open") ){
            setTimeout(() => {
                $(this).find("i").html(`${icons["hsh-arrow-down"].svg}`);
            }, 300);
        }else{
            setTimeout(() => {
                $(this).find("i").html(`${icons["hsh-arrow-up"].svg}`);
            }, 300);
        }
    });
}

// Check if an element is in viewport. Returns true if it is.
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};