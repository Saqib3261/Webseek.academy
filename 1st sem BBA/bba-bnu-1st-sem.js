/* =====================================================
   WEBSEEK ACADEMY
   BBA BNU 1ST SEMESTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const lessons = [

        {
            title: "Strange Meeting - By Wilfred Owen",
            video: "https://youtu.be/cVwiqjH5bRM?si=PNcvEU76HGU__3xB"
        },

        {
            title: "An Introduction - By Kamala Das",
            video: "https://youtu.be/5_irX7UMICk?si=Op5rqdnD62OsjUNO"
        },

        {
            title: "The Model Millionaire - By Oscar Wilde",
            video: "https://youtu.be/PzHStXFffLA?si=6WghMLJ2IVeWVmr0"
        },

        {
            title: "The Hawk-Cuckoo from the Woods - By Kazi Nazrul Islam",
            video: "https://youtu.be/Vb0N055yg0I?si=5CRENFmqPyMbInL0"
        },

        {
            title: "How Wealth Accumulates and Men Decay - By G. B. Shaw",
            video: "https://youtu.be/9qibS8w8fOg?si=N5b3sdQFscExiTgP"
        },

        {
            title: "The Death of Moth - By Virginia Woolf",
            video: "https://youtu.be/JRj_R8s1bvo?si=Q8Pavm6ChzeEif3V"
        }

    ];


    const cards =
        document.querySelectorAll(".lesson-card");


    /* =====================================================
       YOUTUBE ID
    ===================================================== */

    function getYouTubeId(url) {

        if (!url) return "";

        const patterns = [

            /youtu\.be\/([^?&]+)/,

            /youtube\.com\/watch\?v=([^?&]+)/,

            /youtube\.com\/shorts\/([^?&]+)/,

            /youtube\.com\/embed\/([^?&]+)/

        ];


        for (const pattern of patterns) {

            const match =
                url.match(pattern);

            if (match) {

                return match[1];

            }

        }

        return "";

    }


    /* =====================================================
       ADD VIDEO LINKS AND THUMBNAILS
    ===================================================== */

    cards.forEach((card, index) => {

        if (!lessons[index]) return;


        const lesson =
            lessons[index];


        const videoId =
            getYouTubeId(lesson.video);


        card.dataset.title =
            lesson.title;


        const title =
            card.querySelector("h3");


        const button =
            card.querySelector(".watch-btn");


        const image =
            card.querySelector(".lesson-thumbnail");


        if (title) {

            title.textContent =
                lesson.title;

        }


        if (button) {

            button.dataset.video =
                lesson.video;

        }


        if (image) {

            image.dataset.video =
                lesson.video;


            if (videoId) {

                image.src =
                    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;


                image.onerror =
                    function () {

                        this.src =
                            "https://placehold.co/640x360/0b1024/ffffff?text=WebSeek+Academy";

                    };

            }

        }

    });


    /* =====================================================
       WATCH BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".watch-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const videoUrl =
                        this.dataset.video;


                    if (
                        !videoUrl ||
                        videoUrl.includes("PASTE_VIDEO")
                    ) {

                        alert(
                            "Video link is not available yet."
                        );

                        return;

                    }


                    window.open(
                        videoUrl,
                        "_blank"
                    );

                }
            );

        });


    /* =====================================================
       THUMBNAIL CLICK
    ===================================================== */

    document
        .querySelectorAll(".lesson-thumbnail")
        .forEach(image => {

            image.addEventListener(
                "click",
                function () {

                    const videoUrl =
                        this.dataset.video;


                    if (
                        !videoUrl ||
                        videoUrl.includes("PASTE_VIDEO")
                    ) {

                        alert(
                            "Video link is not available yet."
                        );

                        return;

                    }


                    window.open(
                        videoUrl,
                        "_blank"
                    );

                }
            );

        });


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById(
            "lessonSearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    function updateResults() {

        if (!searchInput) return;


        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        let visibleCount = 0;


        cards.forEach(card => {

            const title =
                card.dataset.title
                    .toLowerCase();


            if (
                title.includes(
                    searchValue
                )
            ) {

                card.style.display =
                    "";

                visibleCount++;

            } else {

                card.style.display =
                    "none";

            }

        });


        if (resultCount) {

            resultCount.textContent =
                `${visibleCount} lesson${visibleCount !== 1 ? "s" : ""} found`;

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            updateResults
        );

    }


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                searchInput.value =
                    "";

                updateResults();

                searchInput.focus();

            }
        );

    }


    updateResults();


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton =
        document.getElementById(
            "bbaMenuBtn"
        );


    const nav =
        document.getElementById(
            "bbaNav"
        );


    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "open"
                );


                const isOpen =
                    nav.classList.contains(
                        "open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        nav.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove(
                            "open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }

});