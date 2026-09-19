/* =====================================================
   WEBSEEK ACADEMY
   1ST PUC ENGLISH
   JAVASCRIPT
   ===================================================== */


/* =====================================================
   13 LESSONS
   ===================================================== */

const lessons = [

    {
        number: 1,
        title: "The Gentlemen of Jungle | Chapter - 01",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/srVVA8DNwag?si=wMLFsBCgXDW791tZ"
    },

    {
        number: 2,
        title: "The School Boy | Chapter - 02",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/tZ5NZeulA_I?si=cf4Ud4IW-2qa6H82"
    },

    {
        number: 3,
        title: "Around a Medicinal Creeper | Chapter - 03",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/KPUOkeZ31Ds?si=ih_jdHk6jNdycgef"
    },

    {
        number: 4,
        title: "Oru Manushyan Chapter | - 04",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/6xMO46evTbw?si=Ecnt3VnEWFDIusmX"
    },

    {
        number: 5,
        title: "Money Madness | Chapter - 05",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/puQ-PEilNIs?si=i3-8Qg3ObY9yT5de"
    },

    {
        number: 6,
        title: "Babar Ali | Chapter - 06",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/7lZ5oK0uvY8?si=-oVospNADEnkcU4Q"
    },

    {
        number: 7,
        title: "If I was a Tree | Chapter - 07",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/FT_AMNovfw8?si=Aa9gPc4zkJuRF0GZ"
    },

    {
        number: 8,
        title: "Watchman of the Lake | Chapter - 08",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/2OHAAV-F7UY?si=H7h2cPNAzAwTOAeK"
    },

    {
        number: 9,
        title: "The Farmer's Wife | Chapter - 09",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/vD3Z2yfzLRI?si=gEIgbri__yBKYSMJ"
    },

    {
        number: 10,
        title:"Frederick Douglass |  Chapter - 10",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/Kba8oR9YE74?si=_JkYw_x4LIAe7das"
    },

    {
        number: 11,
        title: "An Old Woman | Chapter - 11",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/qIxadA5HRrU?si=1I2fRQ1Aaw8mwPVj"
    },

    {
        number: 12,
        title: "Two Gentlemen of Verona | Chapter - 12",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/NME5RiBAzsg?si=dsRP9grj4nXWwqac"
    },

    {
        number: 13,
        title: "Do not ask of Me, My Love | Chapter - 13",
        description: "Watch the complete Chapter - explanation.",
        url: "https://youtu.be/1T1sA8jcL-k?si=ighspT8g4WNsau5e"
    }

];


/* =====================================================
   ELEMENTS
   ===================================================== */

const videoGrid =
    document.getElementById("videoGrid");

const searchInput =
    document.getElementById("lessonSearch");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const resetSearch =
    document.getElementById("resetSearch");

const menuButton =
    document.getElementById("pucMenuBtn");

const navigation =
    document.getElementById("pucNav");


/* =====================================================
   YOUTUBE VIDEO ID
   ===================================================== */

function getYouTubeId(url) {

    if (
        !url ||
        url.startsWith("YOUR_YOUTUBE")
    ) {
        return null;
    }

    try {

        const parsedUrl =
            new URL(url);


        /* youtube.com */

        if (
            parsedUrl.hostname.includes("youtube.com")
        ) {

            /* youtube.com/watch?v= */

            const videoId =
                parsedUrl.searchParams.get("v");

            if (videoId) {
                return videoId;
            }


            /* youtube.com/shorts/ */

            const shortsMatch =
                parsedUrl.pathname.match(
                    /\/shorts\/([^/?]+)/
                );

            if (shortsMatch) {
                return shortsMatch[1];
            }


            /* youtube.com/embed/ */

            const embedMatch =
                parsedUrl.pathname.match(
                    /\/embed\/([^/?]+)/
                );

            if (embedMatch) {
                return embedMatch[1];
            }

        }


        /* youtu.be */

        if (
            parsedUrl.hostname === "youtu.be"
        ) {

            const videoId =
                parsedUrl.pathname
                    .replace("/", "")
                    .split("?")[0];

            if (videoId) {
                return videoId;
            }

        }

    } catch (error) {

        console.log(
            "Invalid YouTube URL:",
            url
        );

    }

    return null;
}


/* =====================================================
   THUMBNAIL
   ===================================================== */

function getThumbnail(url) {

    const videoId =
        getYouTubeId(url);

    if (videoId) {

        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    }

    return "https://placehold.co/1280x720/0b1024/ffffff?text=WebSeek+Academy";
}


/* =====================================================
   CREATE VIDEO CARD
   ===================================================== */

function createVideoCard(lesson) {

    const card =
        document.createElement("article");

    card.className =
        "puc-video-card";


    /* THUMBNAIL */

    const thumbnail =
        document.createElement("div");

    thumbnail.className =
        "puc-video-thumbnail";


    /* IMAGE */

    const image =
        document.createElement("img");

    image.src =
        getThumbnail(lesson.url);

    image.alt =
        lesson.title;

    image.loading =
        "lazy";

    image.onerror =
        function () {

            this.onerror = null;

            this.src =
                "https://placehold.co/1280x720/0b1024/ffffff?text=WebSeek+Academy";

        };


    /* NUMBER */

    const number =
        document.createElement("span");

    number.className =
        "puc-video-number";

    number.textContent =
        `LESSON ${String(lesson.number).padStart(2, "0")}`;


    /* PLAY BUTTON */

    const play =
        document.createElement("span");

    play.className =
        "puc-play-button";

    play.innerHTML =
        "▶";


    /* ADD THUMBNAIL ELEMENTS */

    thumbnail.appendChild(image);

    thumbnail.appendChild(number);

    thumbnail.appendChild(play);


    /* =================================================
       CONTENT
       ================================================= */

    const content =
        document.createElement("div");

    content.className =
        "puc-video-content";


    /* TITLE */

    const title =
        document.createElement("h3");

    title.textContent =
        lesson.title;


    /* DESCRIPTION */

    const description =
        document.createElement("p");

    description.textContent =
        lesson.description;


    /* WATCH BUTTON */

    const watchButton =
        document.createElement("a");

    watchButton.className =
        "puc-watch-btn";

    watchButton.textContent =
        "Watch on YouTube →";


    const videoId =
        getYouTubeId(lesson.url);


    /* REAL YOUTUBE LINK */

    if (videoId) {

        watchButton.href =
            lesson.url;

        watchButton.target =
            "_blank";

        watchButton.rel =
            "noopener noreferrer";


        thumbnail.style.cursor =
            "pointer";


        thumbnail.addEventListener(
            "click",
            function () {

                window.open(
                    lesson.url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* PLACEHOLDER LINK */

    else {

        watchButton.href =
            "#";


        watchButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "The YouTube link for this lesson has not been added yet."
                );

            }
        );

    }


    /* ADD CONTENT */

    content.appendChild(title);

    content.appendChild(description);

    content.appendChild(watchButton);


    /* ADD CARD */

    card.appendChild(thumbnail);

    card.appendChild(content);


    return card;
}


/* =====================================================
   DISPLAY LESSONS
   ===================================================== */

function displayLessons(list) {

    if (!videoGrid) {
        return;
    }


    videoGrid.innerHTML =
        "";


    /* NO RESULTS */

    if (list.length === 0) {

        if (noResults) {
            noResults.classList.add("show");
        }

        if (resultCount) {

            resultCount.textContent =
                "0 Lessons";

        }

        return;
    }


    /* HIDE NO RESULTS */

    if (noResults) {

        noResults.classList.remove(
            "show"
        );

    }


    /* CREATE CARDS */

    list.forEach(
        function (lesson) {

            const card =
                createVideoCard(lesson);

            videoGrid.appendChild(card);

        }
    );


    /* RESULT COUNT */

    if (resultCount) {

        resultCount.textContent =
            `${list.length} ${
                list.length === 1
                    ? "Lesson"
                    : "Lessons"
            }`;

    }

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchLessons() {

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    /* EMPTY SEARCH */

    if (searchText === "") {

        displayLessons(
            lessons
        );

        return;
    }


    /* FILTER */

    const filtered =
        lessons.filter(
            function (lesson) {

                return (

                    lesson.title
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    lesson.description
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    String(lesson.number)
                        .includes(searchText)

                );

            }
        );


    displayLessons(
        filtered
    );
}


/* =====================================================
   SEARCH EVENT
   ===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchLessons
    );

}


/* =====================================================
   RESET SEARCH
   ===================================================== */

if (resetSearch) {

    resetSearch.addEventListener(
        "click",
        function () {

            if (searchInput) {

                searchInput.value =
                    "";

                searchInput.focus();

            }

            displayLessons(
                lessons
            );

        }
    );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

if (
    menuButton &&
    navigation
) {

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                navigation.classList.toggle(
                    "open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );


            menuButton.textContent =
                isOpen
                    ? "✕"
                    : "☰";

        }
    );


    const navLinks =
        navigation.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    menuButton.textContent =
                        "☰";

                }
            );

        }
    );

}


/* =====================================================
   INITIALIZE
   ===================================================== */

displayLessons(
    lessons
);


console.log(
    "WebSeek Academy 1st PUC loaded."
);

console.log(
    "Total lessons:",
    lessons.length
);