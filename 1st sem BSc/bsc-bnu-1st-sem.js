/* =====================================================
   WEBSEEK ACADEMY
   B.SC BNU - 1ST SEMESTER
===================================================== */


/* =====================================================
   B.SC BNU 1ST SEMESTER LESSONS

   Replace the titles and links with your
   actual B.Sc YouTube videos.
===================================================== */
const lessons = [

    {
        title: "The Solitary Reaper - William Wordsworth",
        video: "https://youtu.be/K5hMKq_1pdU?si=PJvZiqLjJjNTIjQl"
    },

    {
        title: "The Lotus - Toru Dutt",
        video: "https://youtu.be/_PKhOWj8eTQ?si=Q84yaSQpPGa_gha3"
    },

    {
        title: "Uncle Podger Hangs a Picture - Jerome K. Jerome",
        video: "https://youtu.be/qOQU3tv8K6E?si=7vfSoG8WgZRO7V_T"
    },

    {
        title: "My Lost Dollar - Stephen Leacock",
        video: "https://youtu.be/hzBqKI-n5LY?si=WQBuOlxEuZKl-lyJ"
    },

    {
        title: "The Sporting Spirit - George Orwell",
        video: "https://youtu.be/iBaciY8SxD8?si=sgmpnAh76x4q7zIe"
    },

    {
        title: "Biography of Sir M. Visvesvaraya",
        video: "https://youtu.be/YTWUZzU98rM?si=NjPk6qNStBtKGt8I"
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
    document.getElementById("bscMenuBtn");

const navigation =
    document.getElementById("bscNav");


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


        /* TITLE */

        title.textContent =
            lesson.title;


        /* YOUTUBE THUMBNAIL */

        const videoId =
            getYouTubeId(lesson.video);


        if (videoId) {

            thumbnail.src =
                `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        }


        /* ALT */

        thumbnail.alt =
            `${lesson.title} | WebSeek Academy`;


        /* WATCH BUTTON */

        watchButton.addEventListener(
            "click",
            () => {

                openVideo(lesson.video);

            }
        );


        /* PLAY BUTTON */

        playButton.addEventListener(
            "click",
            () => {

                openVideo(lesson.video);

            }
        );


        /* THUMBNAIL */

        thumbnail.addEventListener(
            "click",
            () => {

                openVideo(lesson.video);

            }
        );

    });

}


/* =====================================================
   OPEN VIDEO
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
   SEARCH
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


    /* RESULT COUNT */

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


    /* NO RESULTS */

    if (visibleCount === 0) {

        lessonGrid.style.display =
            "none";

        noResults.style.display =
            "block";

    } else {

        lessonGrid.style.display =
            "grid";

        noResults.style.display =
            "none";

    }

}


/* =====================================================
   CLEAR SEARCH
===================================================== */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchLessons();

        searchInput.focus();

    }
);


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

menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "active"
        );

    }
);


/* =====================================================
   CLOSE MENU AFTER CLICK
===================================================== */

const navLinks =
    navigation.querySelectorAll("a");


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove(
                "active"
            );

        }
    );

});


/* =====================================================
   INITIALIZE
===================================================== */

loadLessons();