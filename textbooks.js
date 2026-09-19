/* =========================================================
   WEBSEEK ACADEMY - TEXTBOOK LIBRARY JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= ELEMENTS ================= */

    const searchInput =
        document.getElementById("textbookSearch");

    const clearSearch =
        document.getElementById("clearSearch");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const textbookCards =
        document.querySelectorAll(".textbook-card");

    const textbookSections =
        document.querySelectorAll(".textbook-section");

    const universityBlocks =
        document.querySelectorAll(".university-block");

    const semesterGroups =
        document.querySelectorAll(".semester-group");

    const noResults =
        document.getElementById("noResults");

    const resultMessage =
        document.getElementById("resultMessage");

    const resetFilters =
        document.getElementById("resetFilters");


    /* ================= MOBILE NAV ================= */

    const menu =
        document.getElementById("menu");

    const nav =
        document.getElementById("nav");


    if (menu && nav) {

        menu.addEventListener("click", () => {

            nav.classList.toggle("open");

        });


        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

            });

        });

    }


    /* ================= YEAR ================= */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= FILTER ================= */

    let currentFilter = "all";


    function isCardVisible(card) {

        return card.style.display !== "none";

    }


    function filterTextbooks() {

        const searchTerm =
            searchInput
                ? searchInput.value.trim().toLowerCase()
                : "";

        let visibleCount = 0;


        /* ================= CARDS ================= */

        textbookCards.forEach((card) => {

            const category =
                (card.dataset.category || "")
                    .toLowerCase();

            const searchData =
                (card.dataset.search || "")
                    .toLowerCase();


            const categoryMatch =
                currentFilter === "all" ||
                category === currentFilter;


            const searchMatch =
                searchTerm === "" ||
                searchData.includes(searchTerm);


            if (categoryMatch && searchMatch) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        /* ================= SEMESTERS ================= */

        semesterGroups.forEach((semester) => {

            const visibleCards =
                Array.from(
                    semester.querySelectorAll(".textbook-card")
                ).filter(isCardVisible);


            semester.style.display =
                visibleCards.length > 0
                    ? ""
                    : "none";

        });


        /* ================= UNIVERSITY BLOCKS ================= */

        universityBlocks.forEach((block) => {

            const visibleCards =
                Array.from(
                    block.querySelectorAll(".textbook-card")
                ).filter(isCardVisible);


            block.style.display =
                visibleCards.length > 0
                    ? ""
                    : "none";

        });


        /* ================= NORMAL SECTIONS ================= */

        textbookSections.forEach((section) => {

            const visibleCards =
                Array.from(
                    section.querySelectorAll(".textbook-card")
                ).filter(isCardVisible);


            section.style.display =
                visibleCards.length > 0
                    ? ""
                    : "none";

        });


        /* ================= RESULT ================= */

        if (visibleCount === 0) {

            if (noResults) {
                noResults.style.display = "block";
            }

            if (resultMessage) {
                resultMessage.textContent =
                    "No textbooks found.";
            }

        } else {

            if (noResults) {
                noResults.style.display = "none";
            }


            if (resultMessage) {

                if (
                    searchTerm !== "" ||
                    currentFilter !== "all"
                ) {

                    resultMessage.textContent =
                        `${visibleCount} textbook${
                            visibleCount === 1 ? "" : "s"
                        } found`;

                } else {

                    resultMessage.textContent =
                        `${visibleCount} textbooks available`;

                }

            }

        }


        /* ================= CLEAR BUTTON ================= */

        if (clearSearch) {

            clearSearch.style.display =
                searchTerm !== ""
                    ? "inline-flex"
                    : "none";

        }

    }


    /* ================= FILTER BUTTONS ================= */

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentFilter =
                button.dataset.filter || "all";


            filterTextbooks();


            const library =
                document.getElementById("textbookLibrary");


            if (library) {

                library.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ================= SEARCH ================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTextbooks
        );

    }


    /* ================= CLEAR SEARCH ================= */

    if (clearSearch) {

        clearSearch.addEventListener("click", () => {

            searchInput.value = "";

            filterTextbooks();

            searchInput.focus();

        });

    }


    /* ================= RESET FILTERS ================= */

    if (resetFilters) {

        resetFilters.addEventListener("click", () => {

            if (searchInput) {
                searchInput.value = "";
            }


            currentFilter = "all";


            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });


            const allButton =
                document.querySelector(
                    '.filter-btn[data-filter="all"]'
                );


            if (allButton) {

                allButton.classList.add("active");

            }


            filterTextbooks();

        });

    }


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (nav) {
                nav.classList.remove("open");
            }

        }

    });


    /* ================= WINDOW RESIZE ================= */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 900 &&
            nav
        ) {

            nav.classList.remove("open");

        }

    });


    /* ================= INITIAL FILTER ================= */

    filterTextbooks();

});