const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}


document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navigation a");

const navigationObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.navigation a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {
    navigationObserver.observe(section);
});


const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    const button = project.querySelector(".project-header");

    button.addEventListener("click", () => {

        project.classList.toggle("open");

    });

});


const copyEmailButton = document.querySelector("#copy-email");
const email = document.querySelector("#email");

if (copyEmailButton && email) {

    copyEmailButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                email.textContent.trim()
            );

            copyEmailButton.textContent = "COPIED";

            setTimeout(() => {

                copyEmailButton.textContent = "(Copy)";

            }, 2000);

        } catch {

            copyEmailButton.textContent = "[ERROR]";

        }

    });

}


const copySocialButton = document.querySelector(".copy-social");

if (copySocialButton) {

    copySocialButton.addEventListener("click", async () => {

        const social = copySocialButton.dataset.social;

        if (!social) {
            return;
        }

        try {

            await navigator.clipboard.writeText(social);

            copySocialButton.textContent = "[COPIED]";

            setTimeout(() => {

                copySocialButton.textContent = "[COPY SOCIAL]";

            }, 2000);

        } catch {

            copySocialButton.textContent = "[ERROR]";

        }

    });

}


const fadeElements = document.querySelectorAll(
    ".hero-content, .section, footer"
);

const fadeObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            fadeObserver.unobserve(entry.target);

        });

    },

    {
        threshold: 0.1
    }

);

fadeElements.forEach(element => {

    element.classList.add("fade-in");

    fadeObserver.observe(element);

});


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetID = link.getAttribute("href");

        if (targetID === "#") {
            return;
        }

        const target = document.querySelector(targetID);

        if (!target) {
            return;
        }

        event.preventDefault(); 

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


const scrollIndicator = document.getElementById("scrollIndicator");

let scrollTimeout;

window.addEventListener("scroll", () => {

    if (!scrollIndicator) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    scrollIndicator.classList.add("hidden");

    clearTimeout(scrollTimeout);

    if (scrollPosition >= pageHeight - 100) {
        return;
    }

    scrollTimeout = setTimeout(() => {
        scrollIndicator.classList.remove("hidden");
    }, 2000);

});


const titleText = "Augustinas Sirius | Software Engineer     ";
let titlePosition = 0;

setInterval(() => {
    document.title =
        titleText.substring(titlePosition) +
        titleText.substring(0, titlePosition);

    titlePosition = (titlePosition + 1) % titleText.length;
}, 3000);
