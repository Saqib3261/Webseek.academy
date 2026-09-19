/* =================================================
   WEBSEEK ACADEMY
   BCA BCU - 1ST SEMESTER
================================================= */


/* =================================================
   YOUTUBE VIDEOS
================================================= */

const videos = [

    "https://youtu.be/NkRI6bB94cI",
    "https://youtu.be/71Mi5bm2QLQ",
    "https://youtu.be/IMhiLTQSR0o",
    "https://youtu.be/y6QzZW7NIU4",
    "https://youtu.be/nmVHt7r82Pg",
    "https://youtu.be/SaJZJevGMk8",
    "https://youtu.be/Xp1REK91oqo"

];


/* =================================================
   GET YOUTUBE VIDEO ID
================================================= */

function getYouTubeID(url) {

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


/* =================================================
   LESSON CARDS
================================================= */

const lessonCards =
    document.querySelectorAll(".lesson-card");


lessonCards.forEach((card, index) => {

    const videoURL = videos[index];

    if (!videoURL) return;


    const videoID =
        getYouTubeID(videoURL);


    if (!videoID) return;


    /* ===============================
       STORE VIDEO URL
    =============================== */

    card.dataset.video = videoURL;


    /* ===============================
       YOUTUBE THUMBNAIL
    =============================== */

    const thumbnail =
        card.querySelector(".lesson-thumbnail");


    if (thumbnail) {

        thumbnail.src =
            `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

        thumbnail.dataset.video =
            videoURL;

    }


    /* ===============================
       PLAY BUTTON
    =============================== */

    const playButton =
        card.querySelector(".play-button");


    if (playButton) {

        playButton.dataset.video =
            videoURL;

    }


    /* ===============================
       WATCH BUTTON
    =============================== */

    const watchButton =
        card.querySelector(".watch-button");


    if (watchButton) {

        watchButton.dataset.video =
            videoURL;

    }

});


/* =================================================
   OPEN YOUTUBE
================================================= */

function openVideo(videoURL) {

    if (!videoURL) return;

    window.open(
        videoURL,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =================================================
   PLAY BUTTON CLICK
================================================= */

document.querySelectorAll(".play-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            openVideo(button.dataset.video);

        });

    });


/* =================================================
   WATCH BUTTON CLICK
================================================= */

document.querySelectorAll(".watch-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            openVideo(button.dataset.video);

        });

    });


/* =================================================
   THUMBNAIL CLICK
================================================= */

document.querySelectorAll(".lesson-thumbnail")
    .forEach(thumbnail => {

        thumbnail.style.cursor = "pointer";

        thumbnail.addEventListener("click", () => {

            openVideo(thumbnail.dataset.video);

        });

    });


/* =================================================
   SEARCH
================================================= */

const searchInput =
    document.getElementById("lessonSearch");

const clearSearch =
    document.getElementById("clearSearch");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");


function searchLessons() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    let visibleCount = 0;


    lessonCards.forEach(card => {

        const title =
            card.querySelector(".lesson-title");

        const label =
            card.querySelector(".lesson-label");


        const titleText =
            title
                ? title.textContent.toLowerCase()
                : "";


        const labelText =
            label
                ? label.textContent.toLowerCase()
                : "";


        const matches =
            titleText.includes(searchTerm) ||
            labelText.includes(searchTerm);


        if (matches) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    resultCount.textContent =
        `${visibleCount} ${
            visibleCount === 1
                ? "lesson"
                : "lessons"
        } available`;


    if (visibleCount === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }


    if (searchInput.value.length > 0) {

        clearSearch.style.display =
            "block";

    } else {

        clearSearch.style.display =
            "none";

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchLessons
    );

}


/* =================================================
   CLEAR SEARCH
================================================= */

if (clearSearch) {

    clearSearch.addEventListener("click", () => {

        searchInput.value = "";

        searchLessons();

        searchInput.focus();

    });

}


/* =================================================
   MOBILE NAVBAR
================================================= */

const bscMenuBtn =
    document.getElementById("bscMenuBtn");

const bscNav =
    document.getElementById("bscNav");


if (bscMenuBtn && bscNav) {

    bscMenuBtn.addEventListener("click", () => {

        bscNav.classList.toggle("active");


        const isOpen =
            bscNav.classList.contains("active");


        bscMenuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        bscMenuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );


        bscMenuBtn.textContent =
            isOpen ? "✕" : "☰";

    });


    /* ===============================
       CLOSE MENU AFTER LINK CLICK
    =============================== */

    bscNav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                bscNav.classList.remove("active");

                bscMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                bscMenuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                bscMenuBtn.textContent = "☰";

            });

        });

}