// Small interactions for the portfolio. No libraries required.
/*const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const audio = document.getElementById("introAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const restartBtn = document.getElementById("restartBtn");
const muteBtn = document.getElementById("muteBtn");

const progressBar = document.getElementById("progressBar");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");
const volumeBar = document.getElementById("volumeBar");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

// Play and pause
playPauseBtn.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();
        } catch (error) {
            console.error("Audio playback failed:", error);
        }
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", () => {
    playPauseBtn.textContent = "Ⅱ";
});

audio.addEventListener("pause", () => {
    playPauseBtn.textContent = "▶";
});

// Update audio progress
audio.addEventListener("timeupdate", () => {
    if (!Number.isFinite(audio.duration)) return;

    progressBar.value =
        (audio.currentTime / audio.duration) * 100;

    currentTimeText.textContent = formatTime(audio.currentTime);
});

// Show total duration
audio.addEventListener("loadedmetadata", () => {
    durationText.textContent = formatTime(audio.duration);
});

// Seek audio
progressBar.addEventListener("input", () => {
    if (Number.isFinite(audio.duration)) {
        audio.currentTime =
            (progressBar.value / 100) * audio.duration;
    }
});

// Restart audio
restartBtn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.error(error));
});

// Volume
volumeBar.addEventListener("input", () => {
    audio.volume = Number(volumeBar.value);
    audio.muted = false;
    muteBtn.textContent = audio.volume === 0 ? "🔇" : "🔊";
});

// Mute and unmute
muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

// Reset when finished
audio.addEventListener("ended", () => {
    playPauseBtn.textContent = "▶";
    progressBar.value = 0;
    currentTimeText.textContent = "00:00";
    audio.currentTime = 0;
});

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// A subtle rotating role line. Edit these titles to match the roles you want.
const roleElement = document.querySelector("#typed-role");
const roles = ["Software Developer", "Backend Developer", "Web Developer"];
let roleIndex = 0;
if (roleElement) {
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.textContent = roles[roleIndex];
  }, 2600);
}
*/

// ========================================
// VINO RAJENDRAN - PORTFOLIO JAVASCRIPT
// ========================================


// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute("aria-label", "Open navigation");

        });

    });

}


// ========================================
// 2. AUDIO PLAYER ELEMENTS
// ========================================

const audio = document.getElementById("introAudio");

const playPauseBtn = document.getElementById("playPauseBtn");

const restartBtn = document.getElementById("restartBtn");

const muteBtn = document.getElementById("muteBtn");

const progressBar = document.getElementById("progressBar");

const currentTimeText = document.getElementById("currentTime");

const durationText = document.getElementById("duration");

const volumeBar = document.getElementById("volumeBar");


// Format audio time
function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


// Update play button appearance
function updatePlayButton() {

    if (!audio || !playPauseBtn) return;

    if (audio.paused || audio.ended) {

        playPauseBtn.textContent = "▶";

        playPauseBtn.setAttribute(
            "aria-label",
            "Play introduction"
        );

    } else {

        playPauseBtn.textContent = "Ⅱ";

        playPauseBtn.setAttribute(
            "aria-label",
            "Pause introduction"
        );

    }

}


// Update mute button appearance
function updateMuteButton() {

    if (!audio || !muteBtn) return;

    const isMuted = audio.muted || audio.volume === 0;

    muteBtn.textContent = isMuted ? "🔇" : "🔊";

    muteBtn.setAttribute(
        "aria-label",
        isMuted ? "Unmute audio" : "Mute audio"
    );

}


// ========================================
// 3. PLAY AND PAUSE
// ========================================

if (audio && playPauseBtn) {

    playPauseBtn.addEventListener("click", async () => {

        if (audio.paused) {

            try {

                await audio.play();

            } catch (error) {

                console.error("Audio playback failed:", error);

                alert("Unable to play audio. Please check intro.mp3.");

            }

        } else {

            audio.pause();

        }

    });


    audio.addEventListener("play", updatePlayButton);

    audio.addEventListener("pause", updatePlayButton);

    audio.addEventListener("ended", updatePlayButton);

}


// ========================================
// 4. AUDIO DURATION
// ========================================

if (audio && durationText) {

    audio.addEventListener("loadedmetadata", () => {

        durationText.textContent = formatTime(audio.duration);

    });

}


// ========================================
// 5. AUDIO PROGRESS
// ========================================

if (audio && progressBar) {

    audio.addEventListener("timeupdate", () => {

        if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
            return;
        }

        progressBar.value =
            (audio.currentTime / audio.duration) * 100;

        if (currentTimeText) {

            currentTimeText.textContent =
                formatTime(audio.currentTime);

        }

    });


    // Move audio using progress slider
    progressBar.addEventListener("input", () => {

        if (Number.isFinite(audio.duration) && audio.duration > 0) {

            audio.currentTime =
                (Number(progressBar.value) / 100) * audio.duration;

        }

    });

}


// ========================================
// 6. RESTART AUDIO
// ========================================

if (audio && restartBtn) {

    restartBtn.addEventListener("click", async () => {

        audio.currentTime = 0;

        if (progressBar) progressBar.value = 0;

        if (currentTimeText) {
            currentTimeText.textContent = "00:00";
        }

        try {

            await audio.play();

        } catch (error) {

            console.error("Restart failed:", error);

        }

    });

}


// ========================================
// 7. VOLUME CONTROL
// ========================================

if (audio && volumeBar) {

    volumeBar.addEventListener("input", () => {

        audio.volume = Number(volumeBar.value);

        audio.muted = audio.volume === 0;

        updateMuteButton();

    });

}


// ========================================
// 8. MUTE AND UNMUTE
// ========================================

if (audio && muteBtn) {

    muteBtn.addEventListener("click", () => {

        audio.muted = !audio.muted;

        updateMuteButton();

    });

}


// ========================================
// 9. AUDIO FINISHED
// ========================================

if (audio) {

    audio.addEventListener("ended", () => {

        audio.currentTime = 0;

        if (progressBar) progressBar.value = 0;

        if (currentTimeText) {
            currentTimeText.textContent = "00:00";
        }

        updatePlayButton();

    });


    audio.addEventListener("error", () => {

        console.error("Audio file could not be loaded.");

    });

}


// ========================================
// 10. FOOTER YEAR
// ========================================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ========================================
// 11. TYPING / ROLE ANIMATION
// ========================================

const roleElement = document.querySelector("#typed-role");

const roles = [
    "Software Developer",
    "Backend Developer",
    "Web Developer"
];

let roleIndex = 0;

if (roleElement) {

    window.setInterval(() => {

        roleIndex = (roleIndex + 1) % roles.length;

        roleElement.textContent = roles[roleIndex];

    }, 2600);

}

// WHATSAPP CONTACT FORM

document.addEventListener("DOMContentLoaded", function () {

    const whatsappForm = document.getElementById("whatsappForm");

    if (!whatsappForm) return;

    whatsappForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("visitorName").value.trim();

        const message = document.getElementById("visitorMessage").value.trim();

        if (!name || !message) {
            alert("Please enter your name and message.");
            return;
        }

        const phoneNumber = "919791456999";

        const whatsappMessage =
            `Hi Vino!\n\nMy name: ${name}\n\nMessage: ${message}`;

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

});
// PERSONALIZED WELCOME MESSAGE

function updateGreeting() {
    const greeting = document.getElementById("greeting");

    if (!greeting) return;

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Good morning! ☀️";
    }
    else if (hour >= 12 && hour < 17) {
        greeting.textContent = "Good afternoon! 🌤️";
    }
    else if (hour >= 17 && hour < 21) {
        greeting.textContent = "Good evening! 🌆";
    }
    else {
        greeting.textContent = "Good night! 🌙";
    }
}

document.addEventListener("DOMContentLoaded", updateGreeting);




