/* =====================================================
   WEBSEEK ACADEMY
   2nd PUC ENGLISH JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const pucMenuBtn = document.getElementById("pucMenuBtn");
const pucNav = document.getElementById("pucNav");

if (pucMenuBtn && pucNav) {

    pucMenuBtn.addEventListener("click", function () {

        pucNav.classList.toggle("open");

        const isOpen = pucNav.classList.contains("open");

        pucMenuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        pucMenuBtn.innerHTML = isOpen ? "✕" : "☰";

    });


    /* Close mobile menu after clicking a link */

    pucNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            pucNav.classList.remove("open");

            pucMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            pucMenuBtn.innerHTML = "☰";

        });

    });

}


/* =====================================================
   YOUTUBE VIDEO DATA
   2nd PUC ENGLISH - 14 LESSONS
===================================================== */

const videos = [

    "https://youtu.be/hPWmml4KcQY",
    "https://youtu.be/CFU36JVKtHc",
    "https://youtu.be/_Z8biUIsqlY",
    "https://youtu.be/h09EEIr9Ifw",
    "https://youtu.be/t_2Fz_hxkCM",
    "https://youtu.be/CiAZMiIYAzQ",
    "https://youtu.be/IjpE2MmmoJQ",
    "https://youtu.be/fyVfkmXAWh4",
    "https://youtu.be/5NjCl5Xk1b4",
    "https://youtu.be/MWErKgxCLXE",
    "https://youtu.be/RMdkWJyI_ng",
    "https://youtu.be/0MWhRQR217o",
    "https://youtu.be/jBk-mYZhAmo",
    "https://youtu.be/jhf_QXAZaAI"

];


/* =====================================================
   GET ALL LESSON CARDS
===================================================== */

const lessonCards =
    document.querySelectorAll(".lesson-card");


/* =====================================================
   CONNECT YOUTUBE LINKS TO LESSON CARDS
===================================================== */

lessonCards.forEach(function (card, index) {

    if (videos[index]) {

        const videoLink = videos[index];


        /* Store video link on lesson card */

        card.dataset.video = videoLink;


        /* Store video link on thumbnail */

        const thumbnail =
            card.querySelector(".lesson-thumbnail");

        if (thumbnail) {

            thumbnail.dataset.video = videoLink;

        }


        /* Store video link on Watch button */

        const watchButton =
            card.querySelector(".watch-btn");

        if (watchButton) {

            watchButton.dataset.video = videoLink;

        }

    }

});


/* =====================================================
   GET YOUTUBE VIDEO ID
===================================================== */

function getYouTubeId(url) {

    if (!url) {
        return null;
    }


    /* Ignore placeholder links */

    if (url.startsWith("YOUR_YOUTUBE")) {
        return null;
    }


    try {

        const parsedUrl = new URL(url);


        /* youtu.be/VIDEO_ID */

        if (
            parsedUrl.hostname === "youtu.be" ||
            parsedUrl.hostname === "www.youtu.be"
        ) {

            return parsedUrl.pathname
                .substring(1)
                .split("/")[0];

        }


        /* youtube.com links */

        if (
            parsedUrl.hostname === "youtube.com" ||
            parsedUrl.hostname === "www.youtube.com" ||
            parsedUrl.hostname === "m.youtube.com"
        ) {


            /* youtube.com/watch?v=VIDEO_ID */

            if (parsedUrl.pathname === "/watch") {

                return parsedUrl.searchParams.get("v");

            }


            /* youtube.com/shorts/VIDEO_ID */

            if (
                parsedUrl.pathname.startsWith("/shorts/")
            ) {

                return parsedUrl.pathname
                    .split("/shorts/")[1]
                    .split("/")[0];

            }


            /* youtube.com/embed/VIDEO_ID */

            if (
                parsedUrl.pathname.startsWith("/embed/")
            ) {

                return parsedUrl.pathname
                    .split("/embed/")[1]
                    .split("/")[0];

            }

        }

    }

    catch (error) {

        console.error(
            "Invalid YouTube URL:",
            url
        );

        return null;

    }


    return null;

}


/* =====================================================
   SET YOUTUBE THUMBNAILS
===================================================== */

const thumbnails =
    document.querySelectorAll(".lesson-thumbnail");


thumbnails.forEach(function (image) {

    const videoLink =
        image.dataset.video;


    const videoId =
        getYouTubeId(videoLink);


    if (videoId) {

        image.src =
            "https://img.youtube.com/vi/" +
            videoId +
            "/hqdefault.jpg";


        /* Make thumbnail clickable */

        image.style.cursor = "pointer";


        /* Prevent broken image */

        image.onerror = function () {

            image.src =
                "https://img.youtube.com/vi/" +
                videoId +
                "/mqdefault.jpg";

        };

    }

});


/* =====================================================
   OPEN YOUTUBE VIDEO
===================================================== */

function openYouTubeVideo(videoLink) {

    if (
        !videoLink ||
        videoLink.startsWith("YOUR_YOUTUBE")
    ) {

        alert(
            "The video link for this lesson has not been added yet."
        );

        return;

    }


    const videoId =
        getYouTubeId(videoLink);


    if (!videoId) {

        alert(
            "Please check the YouTube link for this lesson."
        );

        return;

    }


    const youtubeURL =
        "https://www.youtube.com/watch?v=" +
        videoId;


    window.open(
        youtubeURL,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =====================================================
   WATCH BUTTONS
===================================================== */

const watchButtons =
    document.querySelectorAll(".watch-btn");


watchButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const videoLink =
                button.dataset.video;


            openYouTubeVideo(videoLink);

        }
    );

});


/* =====================================================
   THUMBNAIL CLICK
===================================================== */

thumbnails.forEach(function (image) {

    image.addEventListener(
        "click",
        function () {

            const videoLink =
                image.dataset.video;


            openYouTubeVideo(videoLink);

        }
    );

});


/* =====================================================
   SEARCH ELEMENTS
===================================================== */

const searchInput =
    document.getElementById("lessonSearch");


const clearSearch =
    document.getElementById("clearSearch");


const resultCount =
    document.getElementById("resultCount");


const noResults =
    document.getElementById("noResults");


/* =====================================================
   SEARCH LESSONS
===================================================== */

function searchLessons() {

    if (!searchInput) {
        return;
    }


    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    let visibleLessons = 0;


    lessonCards.forEach(function (card) {


        /* Get title from data-title */

        const title =
            (
                card.dataset.title ||
                ""
            ).toLowerCase();


        /* Also search visible text */

        const cardText =
            (
                card.textContent ||
                ""
            ).toLowerCase();


        const matches =
            title.includes(searchTerm) ||
            cardText.includes(searchTerm);


        if (matches) {

            card.style.display = "";

            visibleLessons++;

        }

        else {

            card.style.display = "none";

        }

    });


    /* =================================================
       UPDATE RESULT COUNT
    ================================================= */

    if (resultCount) {

        resultCount.textContent =
            "Showing " +
            visibleLessons +
            " of " +
            lessonCards.length +
            " lessons";

    }


    /* =================================================
       SHOW / HIDE NO RESULTS
    ================================================= */

    if (noResults) {

        if (visibleLessons === 0) {

            noResults.style.display = "block";

        }

        else {

            noResults.style.display = "none";

        }

    }

}


/* =====================================================
   SEARCH WHILE TYPING
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchLessons
    );

}


/* =====================================================
   CLEAR SEARCH
===================================================== */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function () {


            if (searchInput) {

                searchInput.value = "";

                searchLessons();

                searchInput.focus();

            }

        }
    );

}


/* =====================================================
   INITIAL RESULT COUNT
===================================================== */

if (resultCount) {

    resultCount.textContent =
        "Showing " +
        lessonCards.length +
        " of " +
        lessonCards.length +
        " lessons";

}


/* =====================================================
   INITIAL NO-RESULTS STATE
===================================================== */

if (noResults) {

    noResults.style.display = "none";

}


/* =====================================================
   DEBUG INFORMATION
===================================================== */

console.log(
    "WebSeek Academy - 2nd PUC English loaded successfully."
);

console.log(
    "Total lesson cards:",
    lessonCards.length
);

console.log(
    "Total YouTube videos:",
    videos.length
);


/* =====================================================
   CHECK VIDEO CONNECTIONS
===================================================== */

lessonCards.forEach(function (card, index) {

    if (videos[index]) {

        console.log(
            "Lesson " +
            (index + 1) +
            " connected:",
            videos[index]
        );

    }

    else {

        console.warn(
            "No YouTube video found for Lesson " +
            (index + 1)
        );

    }

});