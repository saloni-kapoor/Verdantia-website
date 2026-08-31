const details = document.querySelectorAll(".accordion details");

details.forEach(function (item) {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        const content = item.querySelector(".content");

        if (item.open) {

            content.style.maxHeight = "0px";
            content.style.paddingBottom = "0px";
            content.style.opacity = "0";

            setTimeout(function () {
                item.open = false;
            }, 800);

        } else {

            details.forEach(function (other) {

                if (other !== item && other.open) {

                    const otherContent = other.querySelector(".content");

                    otherContent.style.maxHeight = "0px";
                    otherContent.style.paddingBottom = "0px";
                    otherContent.style.opacity = "0";

                    setTimeout(function () {
                        other.open = false;
                    }, 800);
                }

            });

            item.open = true;

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingBottom = "20px";
            content.style.opacity = "1";
        }

    });

});
var images = [
    "couple2.png",
    "image.png",
    "card1.png"
];

var current = 0;

var image = document.querySelector(".carousel img");
var next = document.querySelector(".carousel .next");
var pre = document.querySelector(".carousel .pre");

next.addEventListener("click", function (e) {

    e.preventDefault();
    e.stopPropagation();

    current++;

    if (current >= images.length) {
        current = 0;
    }

    image.src = images[current];

});

pre.addEventListener("click", function (e) {

    e.preventDefault();
    e.stopPropagation();

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    image.src = images[current];

});
