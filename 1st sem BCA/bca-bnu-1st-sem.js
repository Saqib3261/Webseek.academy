/* =====================================================
   WEBSEEK ACADEMY
   BCA BNU 1ST SEMESTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const lessons = [
        {
            title: "Sonnet XVIII - By William Shakespeare",
            video: "https://youtu.be/NtTxPVX48EA"
        },
        {
            title: "Night of the Scorpion - By Nissim Ezekiel",
            video: "https://youtu.be/eIURid8Kd14"
        },
        {
            title: "The Open Window - By Saki",
            video: "https://youtu.be/oaVSMo3ZRqQ"
        },
        {
            title: "The Beggar - By Anton Chekhov",
            video: "https://youtu.be/8ouERl0QQgc"
        },
        {
            title: "When Cities were Nature's Heaven: A Tale from Bangalore - By Harini Nagendra",
            video: "https://youtu.be/CpfjfRoqFe4"
        },
        {
            title: "Biography of Kalpana Chawla",
            video: "https://youtu.be/5Gwe4FWGgSY"
        }
    ];

    const cards = document.querySelectorAll(".lesson-card");

    function getYouTubeId(url) {
        if (!url) return "";

        const patterns = [
            /youtu\.be\/([^?&]+)/,
            /youtube\.com\/watch\?v=([^?&]+)/,
            /youtube\.com\/shorts\/([^?&]+)/,
            /youtube\.com\/embed\/([^?&]+)/
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) {
                return match[1];
            }
        }

        return "";
    }

    /* Add video links and thumbnails */
    cards.forEach((card, index) => {

        if (!lessons[index]) return;

        const lesson = lessons[index];
        const videoId = getYouTubeId(lesson.video);

        card.dataset.title = lesson.title;

        const title = card.querySelector("h3");
        const button = card.querySelector(".watch-btn");
        const image = card.querySelector(".lesson-thumbnail");

        if (title) {
            title.textContent = lesson.title;
        }

        if (button) {
            button.dataset.video = lesson.video;
        }

        if (image) {
            image.dataset.video = lesson.video;

            if (videoId) {
                image.src =
                    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                image.onerror = function () {
                    this.src =
                        "https://placehold.co/640x360/0b1024/ffffff?text=WebSeek+Academy";
                };
            }
        }
    });


    /* =====================================================
       WATCH BUTTONS
    ===================================================== */

    document.querySelectorAll(".watch-btn").forEach(button => {

        button.addEventListener("click", function () {

            const videoUrl = this.dataset.video;

            if (!videoUrl) {
                alert("Video link is not available yet.");
                return;
            }

            window.open(videoUrl, "_blank");
        });

    });


    /* =====================================================
       THUMBNAIL CLICK
    ===================================================== */

    document.querySelectorAll(".lesson-thumbnail").forEach(image => {

        image.addEventListener("click", function () {

            const videoUrl = this.dataset.video;

            if (!videoUrl) {
                alert("Video link is not available yet.");
                return;
            }

            window.open(videoUrl, "_blank");
        });

    });


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchInput = document.getElementById("lessonSearch");
    const clearButton = document.getElementById("clearSearch");
    const resultCount = document.getElementById("resultCount");

    function updateResults() {

        if (!searchInput) return;

        const searchValue =
            searchInput.value.toLowerCase().trim();

        let visibleCount = 0;

        cards.forEach(card => {

            const title =
                card.dataset.title.toLowerCase();

            if (title.includes(searchValue)) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        if (resultCount) {

            resultCount.textContent =
                `${visibleCount} lesson${visibleCount !== 1 ? "s" : ""} found`;

        }

    }

    if (searchInput) {
        searchInput.addEventListener("input", updateResults);
    }

    if (clearButton) {

        clearButton.addEventListener("click", function () {

            searchInput.value = "";

            updateResults();

            searchInput.focus();

        });

    }

    updateResults();


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton =
        document.getElementById("bcaMenuBtn");

    const nav =
        document.getElementById("bcaNav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("open");

            const isOpen =
                nav.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

});