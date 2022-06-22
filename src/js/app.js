import gsap from "gsap";
//import Flip from 'gsap/Flip';
//gsap.registerPlugin(Flip);

// function docReady(fn) {
//     // see if DOM is already available
//     if (document.readyState === "complete" || document.readyState === "interactive") {
//         // call on next available tick
//         setTimeout(fn, 1);
//     } else {
//         document.addEventListener("DOMContentLoaded", fn);
//     }
// }




// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function () {

        const imagesLoaded = require('imagesloaded');
        const images = document.querySelectorAll('.grid__item-img');
        imagesLoaded(images, { background: true }, function () {

            const onLoadTl = gsap.timeline();
            onLoadTl.to(".overlay", {
                y: 0,
                duration: 0.1
            });
            onLoadTl.to(".overlay__title", {
                opacity: 1,
                y: 0,
                stagger: .3,
                duration: 0.6
            });

            onLoadTl.to(".overlay__title-line", {
                width: "100%",
                duration: 0.8,
            });

            const overlay = document.querySelector(".overlay");
            overlay.onclick = function () {
                onLoadTl.timeScale(3).reverse();
                mainTl();
            }

            function mainTl() {
                gsap.timeline()
                    .to(".grid__item--title span", {
                        opacity: 1,
                        x: 0,
                        stagger: -.1,
                        duration: .6
                    }, 0.5)

                    .to(".grid__item", {
                        opacity: 1,
                        y: 0,
                        stagger: .1,
                        duration: 1
                    })

                    .to(".grid__item-text", {
                        x: 0,
                        opacity: .8,
                        stagger: .1,
                        duration: .8,
                    }, 1)
                    // }
                    .to(".grid__item--japan-title, .grid__item--burger", {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                    }, 0.5)
            }
        });



    };

});