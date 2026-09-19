/* =====================================================
   WEBSEEK ACADEMY
   SSLC ENGLISH JAVASCRIPT
===================================================== */


/* =====================================================
   LESSON DATA
===================================================== */

const lessons = [

    /* =========================
       PART 1
    ========================= */

    {
        part: "Part 1",
        lesson: "Lesson 01",
        title: "A Wrong Man in Workers' Paradise | Chapter 01",
        description: "Complete explanation of SSLC English Part-1, Chapter 01.",
        youtube: "https://youtu.be/1glfJwRfA4M"
    },

    {
        part: "Part 1",
        lesson: "Lesson 02",
        title: "The Elixir of Life | Chapter 02",
        description: "Complete explanation of SSLC English Part-1, Chapter 02.",
        youtube: "https://youtu.be/UpQYt-1laDs"
    },

    {
        part: "Part 1",
        lesson: "Lesson 03",
        title: "The Gift of the Magi | Chapter 03",
        description: "Complete explanation of SSLC English Part-1, Chapter 03.",
        youtube: "https://youtu.be/8tD8cFcC0kM"
    },

    {
        part: "Part 1",
        lesson: "Lesson 04",
        title: "Louis Pasteur, Conqueror of Disease | Chapter 04",
        description: "Complete explanation of SSLC English Part-1, Chapter 04.",
        youtube: "https://youtu.be/LTP2eWU-f8o"
    },

    {
        part: "Part 1",
        lesson: "Lesson 05",
        title: "What is Moral Action? | Chapter 05",
        description: "Complete explanation of SSLC English Part-1, Chapter 05.",
        youtube: "https://youtu.be/eciYdXI5AYM"
    },

    {
        part: "Part 1",
        lesson: "Lesson 06",
        title: "To a Pair of Sarus Cranes | Chapter 06",
        description: "Complete explanation of SSLC English Part-1, Chapter 06.",
        youtube: "https://youtu.be/AalOTC0R8aA"
    },

    {
        part: "Part 1",
        lesson: "Lesson 07",
        title: "Abraham Lincoln's Letters | Chapter 07",
        description: "Complete explanation of SSLC English Part-1, Chapter 07.",
        youtube: "https://youtu.be/oammARzoLgk"
    },

    {
        part: "Part 1",
        lesson: "Lesson 08",
        title: "Vachana | Chapter 08",
        description: "Complete explanation of SSLC English Part-1, Chapter 08.",
        youtube: "https://youtu.be/d78soBI2IJo"
    },

    {
        part: "Part 1",
        lesson: "Lesson 09",
        title: "Lochinvar | Chapter 09",
        description: "Complete explanation of SSLC English Part-1, Chapter 09.",
        youtube: "https://youtu.be/OU-PEH-yPCA"
    },

    {
        part: "Part 1",
        lesson: "Lesson 10",
        title: "A Poison Tree | Chapter 10",
        description: "Complete explanation of SSLC English Part-1, Chapter 10.",
        youtube: "https://youtu.be/K--OprT1fl8"
    },


    /* =========================
       PART 2
       Replace these details
       when your videos are ready
    ========================= */

    {
        part: "Part 2",
        lesson: "Lesson 01",
        title: "SSLC English Lesson 01",
        description: "Complete explanation of SSLC English Part-2, Lesson 01.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 02",
        title: "SSLC English Lesson 02",
        description: "Complete explanation of SSLC English Part-2, Lesson 02.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 03",
        title: "SSLC English Lesson 03",
        description: "Complete explanation of SSLC English Part-2, Lesson 03.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 04",
        title: "SSLC English Lesson 04",
        description: "Complete explanation of SSLC English Part-2, Lesson 04.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 05",
        title: "SSLC English Lesson 05",
        description: "Complete explanation of SSLC English Part-2, Lesson 05.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 06",
        title: "SSLC English Lesson 06",
        description: "Complete explanation of SSLC English Part-2, Lesson 06.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 07",
        title: "SSLC English Lesson 07",
        description: "Complete explanation of SSLC English Part-2, Lesson 07.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 08",
        title: "SSLC English Lesson 08",
        description: "Complete explanation of SSLC English Part-2, Lesson 08.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 09",
        title: "SSLC English Lesson 09",
        description: "Complete explanation of SSLC English Part-2, Lesson 09.",
        youtube: ""
    },

    {
        part: "Part 2",
        lesson: "Lesson 10",
        title: "SSLC English Lesson 10",
        description: "Complete explanation of SSLC English Part-2, Lesson 10.",
        youtube: ""
    }

];



/* =====================================================
   ELEMENTS
===================================================== */

const part1Grid =
    document.getElementById("part1Grid");

const part2Grid =
    document.getElementById("part2Grid");

const searchInput =
    document.getElementById("lessonSearch");

const clearSearch =
    document.getElementById("clearSearch");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const resetSearch =
    document.getElementById("resetSearch");

const filters =
    document.querySelectorAll(".sslc-filter");


/* =====================================================
   PUC NAVBAR
   SAME NAVBAR AS PUC PAGE
===================================================== */

const menu =
    document.getElementById("pucMenuBtn");

const nav =
    document.getElementById("pucNav");


if (menu && nav) {

    menu.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        menu.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* =====================================================
   GET YOUTUBE ID
===================================================== */

function getYouTubeId(url) {

    if (!url) {
        return null;
    }


    const patterns = [

        /youtu\.be\/([^?&/]+)/,

        /youtube\.com\/watch\?v=([^?&/]+)/,

        /youtube\.com\/shorts\/([^?&/]+)/,

        /youtube\.com\/embed\/([^?&/]+)/

    ];


    for (const pattern of patterns) {

        const match =
            url.match(pattern);

        if (match) {

            return match[1];

        }

    }


    return null;
}



/* =====================================================
   GET THUMBNAIL
===================================================== */

function getThumbnail(url) {

    const youtubeId =
        getYouTubeId(url);


    if (youtubeId) {

        return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    }


    return "https://placehold.co/800x450/0b1024/ffffff?text=SSLC+English";

}



/* =====================================================
   CREATE CARD
===================================================== */

function createCard(video) {

    const thumbnail =
        getThumbnail(video.youtube);


    const youtubeId =
        getYouTubeId(video.youtube);


    let watchLink = "#";


    if (youtubeId) {

        watchLink =
            `https://www.youtube.com/watch?v=${youtubeId}`;

    }


    const card =
        document.createElement("article");


    card.className =
        "sslc-video-card";


    card.innerHTML = `

        <div class="sslc-thumbnail">

            <img
                src="${thumbnail}"
                alt="${video.title}"
                loading="lazy"
            >

            <span class="sslc-part-badge">
                ${video.part}
            </span>

            <span class="sslc-play">
                ▶
            </span>

        </div>


        <div class="sslc-video-content">

            <span class="sslc-lesson-number">
                ${video.lesson}
            </span>


            <h3>
                ${video.title}
            </h3>


            <p>
                ${video.description}
            </p>


            ${
                youtubeId
                ?
                `
                <a
                    href="${watchLink}"
                    class="sslc-watch"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Watch Lesson
                    <span>→</span>
                </a>
                `
                :
                `
                <span class="sslc-watch sslc-coming-soon">
                    Video Coming Soon
                </span>
                `
            }

        </div>

    `;


    return card;

}



/* =====================================================
   DISPLAY LESSONS
===================================================== */

function displayLessons(
    selectedPart = "All",
    searchText = ""
) {

    part1Grid.innerHTML = "";

    part2Grid.innerHTML = "";


    const search =
        searchText
            .trim()
            .toLowerCase();


    const filtered =
        lessons.filter(video => {

            const matchesPart =
                selectedPart === "All" ||
                video.part === selectedPart;


            const matchesSearch =
                !search ||

                video.title
                    .toLowerCase()
                    .includes(search) ||

                video.description
                    .toLowerCase()
                    .includes(search) ||

                video.lesson
                    .toLowerCase()
                    .includes(search) ||

                video.part
                    .toLowerCase()
                    .includes(search);


            return (
                matchesPart &&
                matchesSearch
            );

        });


    const part1Lessons =
        filtered.filter(
            video => video.part === "Part 1"
        );


    const part2Lessons =
        filtered.filter(
            video => video.part === "Part 2"
        );



    /* =================================================
       PART 1
    ================================================= */

    part1Lessons.forEach(video => {

        part1Grid.appendChild(
            createCard(video)
        );

    });



    /* =================================================
       PART 2
    ================================================= */

    part2Lessons.forEach(video => {

        part2Grid.appendChild(
            createCard(video)
        );

    });



    /* =================================================
       SHOW / HIDE SECTIONS
    ================================================= */

    const part1Section =
        document.getElementById("part1");

    const part2Section =
        document.getElementById("part2");


    part1Section.style.display =
        part1Lessons.length > 0
            ? "block"
            : "none";


    part2Section.style.display =
        part2Lessons.length > 0
            ? "block"
            : "none";



    /* =================================================
       RESULT COUNT
    ================================================= */

    resultCount.textContent =
        `${filtered.length} ${
            filtered.length === 1
                ? "Lesson"
                : "Lessons"
        }`;



    /* =================================================
       NO RESULTS
    ================================================= */

    if (filtered.length === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }



    /* =================================================
       CLEAR BUTTON
    ================================================= */

    if (searchText.trim().length > 0) {

        clearSearch.classList.add("show");

    } else {

        clearSearch.classList.remove("show");

    }

}



/* =====================================================
   ACTIVE FILTER
===================================================== */

let activeFilter = "All";


filters.forEach(button => {

    button.addEventListener("click", () => {


        filters.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        activeFilter =
            button.dataset.filter;


        displayLessons(
            activeFilter,
            searchInput.value
        );

    });

});



/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    () => {

        displayLessons(
            activeFilter,
            searchInput.value
        );

    }
);



/* =====================================================
   CLEAR SEARCH
===================================================== */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";


        displayLessons(
            activeFilter,
            ""
        );


        searchInput.focus();

    }
);



/* =====================================================
   RESET SEARCH
===================================================== */

resetSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        activeFilter = "All";


        filters.forEach(btn => {

            btn.classList.remove("active");

        });


        const allFilter =
            document.querySelector(
                '.sslc-filter[data-filter="All"]'
            );


        if (allFilter) {

            allFilter.classList.add("active");

        }


        displayLessons(
            "All",
            ""
        );

    }
);



/* =====================================================
   INITIAL LOAD
===================================================== */

displayLessons(
    "All",
    ""
);