/* =====================================================
   WEBSEEK ACADEMY
   B.COM BNU - 1ST SEMESTER
===================================================== */


/* =====================================================
   B.COM BNU 1ST SEMESTER LESSONS
===================================================== */

const lessons = [

    {
        title: "Sonnet 116 - By William Shakespeare",
        video: "https://youtu.be/ZCRWQGAZg-k"
    },

    {
        title: "To India - My Native Land - By Henry Louis Vivian Derozio",
        video: "https://youtu.be/PXFgWn1MOO8"
    },

    {
        title: "A Service of Love - By O. Henry",
        video: "https://youtu.be/LjBer0c6dNs"
    },

    {
        title: "The Monkey's Paw - By W. W. Jacobs",
        video: "https://youtu.be/z6orCe-w-p8"
    },

    {
        title: "Black Money and Black Economy - By C. Rammanohar Reddy",
        video: "https://youtu.be/Hmz4RCJqqpg"
    },

    {
        title: "The Chronicle of Hariya Dom - By Shyamal Kumar Pramanik",
        video: "https://youtu.be/QkXB0mZhViU"
    }

];


/* =====================================================
   ELEMENTS
===================================================== */

const lessonCards =
    document.querySelectorAll(".lesson-card");

const searchInput =
    document.getElementById("lessonSearch");

const clearSearch =
    document.getElementById("clearSearch");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const lessonGrid =
    document.getElementById("lessonGrid");

const menuButton =
    document.getElementById("bcomMenuBtn");

const navigation =
    document.getElementById("bcomNav");


/* =====================================================
   GET YOUTUBE VIDEO ID
===================================================== */

function getYouTubeId(url) {

    if (!url) {
        return null;
    }

    const patterns = [

        /youtu\.be\/([^?&]+)/,

        /youtube\.com\/watch\?v=([^?&]+)/,

        /youtube\.com\/embed\/([^?&]+)/,

        /youtube\.com\/shorts\/([^?&]+)/

    ];

    for (const pattern of patterns) {

        const match = url.match(pattern);

        if (match) {
            return match[1];
        }

    }

    return null;
}


/* =====================================================
   LOAD LESSONS
===================================================== */

function loadLessons() {

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


        /* ---------- TITLE ---------- */

        title.textContent = lesson.title;


        /* ---------- YOUTUBE THUMBNAIL ---------- */

        const videoId =
            getYouTubeId(lesson.video);

        if (videoId) {

            thumbnail.src =
                `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        }


        /* ---------- ALT TEXT ---------- */

        thumbnail.alt =
            `${lesson.title} | WebSeek Academy`;


        /* ---------- WATCH BUTTON ---------- */

        watchButton.addEventListener("click", () => {

            openVideo(lesson.video);

        });


        /* ---------- PLAY BUTTON ---------- */

        playButton.addEventListener("click", () => {

            openVideo(lesson.video);

        });


        /* ---------- THUMBNAIL ---------- */

        thumbnail.addEventListener("click", () => {

            openVideo(lesson.video);

        });

    });

}


/* =====================================================
   OPEN YOUTUBE VIDEO
===================================================== */

function openVideo(url) {

    if (!url) {

        alert(
            "The YouTube video link has not been added yet."
        );

        return;
    }

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =====================================================
   SEARCH LESSONS
===================================================== */

function searchLessons() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    let visibleCount = 0;


    lessonCards.forEach(card => {

        const title =
            card.querySelector(".lesson-title")
                .textContent
                .toLowerCase();

        const label =
            card.querySelector(".lesson-label")
                .textContent
                .toLowerCase();

        const matches =
            title.includes(searchTerm) ||
            label.includes(searchTerm);


        if (matches) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    /* ---------- RESULT COUNT ---------- */

    if (searchTerm === "") {

        resultCount.textContent =
            "6 lessons available";

        clearSearch.style.display =
            "none";

    } else {

        resultCount.textContent =
            `${visibleCount} lesson${visibleCount === 1 ? "" : "s"} found`;

        clearSearch.style.display =
            "block";

    }


    /* ---------- NO RESULTS ---------- */

    if (visibleCount === 0) {

        lessonGrid.style.display = "none";

        noResults.style.display = "block";

    } else {

        lessonGrid.style.display = "grid";

        noResults.style.display = "none";

    }

}


/* =====================================================
   CLEAR SEARCH
===================================================== */

clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    searchLessons();

    searchInput.focus();

});


/* =====================================================
   SEARCH EVENT
===================================================== */

searchInput.addEventListener(
    "input",
    searchLessons
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
    navigation.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =====================================================
   INITIALIZE
===================================================== */

loadLessons();