/* =====================================================
   WEBSEEK ACADEMY
   BBA BCU - 1ST SEMESTER
===================================================== */


/* =====================================================
   LESSON DATA
===================================================== */

const lessons = [

    {
        title: "Shut Down the Shop - Nissar Ahmed",
        video: "https://youtu.be/EyIGAgPw2n8"
    },

    {
        title: "Sonnet 116 - William Shakespeare",
        video: "https://youtu.be/ZZohWfMutW0"
    },

    {
        title: "An Astrologer's Day - R.K Narayan",
        video: "https://youtu.be/Mby6lv5zsnk"
    },

    {
        title: "With the Photographer - Stephen Leacock",
        video: "https://youtu.be/sPRbR_CeC9o"
    },

    {
        title: "The Necklace - Guy de Maupassant",
        video: "https://youtu.be/97BkK7R0fk4"
    },

    {
        title: "Go Kiss the World' Speech - Subroto Bagchi",
        video: "https://youtu.be/IZfWBBqXofo"
    },

    {
        title: "The Rhetoric of Advertising - Stuart Hirschberg",
        video: "https://youtu.be/eelMZeG-xiA"
    }

];


/* =====================================================
   GET YOUTUBE VIDEO ID
===================================================== */

function getYouTubeId(url) {

    try {

        const parsedURL = new URL(url);

        if (parsedURL.hostname.includes("youtu.be")) {
            return parsedURL.pathname.substring(1);
        }

        if (parsedURL.hostname.includes("youtube.com")) {
            return parsedURL.searchParams.get("v");
        }

    } catch (error) {

        console.error("Invalid YouTube URL:", url);

    }

    return null;
}


/* =====================================================
   OPEN VIDEO
===================================================== */

function openVideo(videoURL) {

    if (!videoURL) {
        return;
    }

    window.open(
        videoURL,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =====================================================
   LOAD LESSONS
===================================================== */

const lessonCards =
    document.querySelectorAll(".lesson-card");


lessonCards.forEach((card, index) => {

    const lesson = lessons[index];

    if (!lesson) {
        return;
    }


    const title =
        card.querySelector(".lesson-title");

    const thumbnail =
        card.querySelector(".lesson-thumbnail");

    const watchButton =
        card.querySelector(".watch-button");

    const playButton =
        card.querySelector(".play-button");


    /* -----------------------------
       TITLE
    ----------------------------- */

    if (title) {

        title.textContent =
            lesson.title;

    }


    /* -----------------------------
       YOUTUBE THUMBNAIL
    ----------------------------- */

    const videoId =
        getYouTubeId(lesson.video);


    if (videoId && thumbnail) {

        thumbnail.src =
            `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        thumbnail.alt =
            lesson.title;

    }


    /* -----------------------------
       WATCH BUTTON
    ----------------------------- */

    if (watchButton) {

        watchButton.addEventListener(
            "click",
            () => openVideo(lesson.video)
        );

    }


    /* -----------------------------
       PLAY BUTTON
    ----------------------------- */

    if (playButton) {

        playButton.addEventListener(
            "click",
            () => openVideo(lesson.video)
        );

    }


    /* -----------------------------
       THUMBNAIL CLICK
    ----------------------------- */

    if (thumbnail) {

        thumbnail.style.cursor = "pointer";

        thumbnail.addEventListener(
            "click",
            () => openVideo(lesson.video)
        );

    }

});


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById("lessonSearch");

const clearSearch =
    document.getElementById("clearSearch");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");


function filterLessons() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    let visibleCount = 0;


    lessonCards.forEach((card, index) => {

        const lesson = lessons[index];

        if (!lesson) {
            return;
        }


        const title =
            lesson.title.toLowerCase();


        const matches =
            title.includes(searchText);


        if (matches) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    /* -----------------------------
       RESULT COUNT
    ----------------------------- */

    resultCount.textContent =
        `${visibleCount} ${
            visibleCount === 1
                ? "lesson"
                : "lessons"
        } available`;


    /* -----------------------------
       NO RESULTS
    ----------------------------- */

    if (visibleCount === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* =====================================================
   SEARCH EVENT
===================================================== */

searchInput.addEventListener(
    "input",
    filterLessons
);


/* =====================================================
   CLEAR SEARCH
===================================================== */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        filterLessons();

        searchInput.focus();

    }
);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("bbaMenuBtn");

const navigation =
    document.getElementById("bbaNav");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("active");


        const isOpen =
            navigation.classList.contains("active");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
    navigation.querySelectorAll("a");


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});