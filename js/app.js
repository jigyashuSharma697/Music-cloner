// BeatFlow player data. Audio links are royalty-free demo files, not commercial songs.
const tracks = [
    {
        title: "Neon Drive",
        artist: "Free Pulse",
        folder: "Focus",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://picsum.photos/seed/neon-drive/500/500"
    },
    {
        title: "Night Runner",
        artist: "Skyline Lab",
        folder: "Workout",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://picsum.photos/seed/night-runner/500/500"
    },
    {
        title: "Coffee Waves",
        artist: "Lo-Fi Room",
        folder: "Chill",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://picsum.photos/seed/coffee-waves/500/500"
    },
    {
        title: "City Lights",
        artist: "Metro Keys",
        folder: "Party",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "https://picsum.photos/seed/city-lights/500/500"
    },
    {
        title: "Fresh Start",
        artist: "Morning Tape",
        folder: "Focus",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "https://picsum.photos/seed/fresh-start/500/500"
    },
    {
        title: "Bass Sprint",
        artist: "Motion Crew",
        folder: "Workout",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        cover: "https://picsum.photos/seed/bass-sprint/500/500"
    },
    {
        title: "Soft Rain",
        artist: "Quiet North",
        folder: "Chill",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        cover: "https://picsum.photos/seed/soft-rain/500/500"
    },
    {
        title: "Signal High",
        artist: "Club Echo",
        folder: "Party",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        cover: "https://picsum.photos/seed/signal-high/500/500"
    },
    {
        title: "Deep Work",
        artist: "Desk Mode",
        folder: "Focus",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        cover: "https://picsum.photos/seed/deep-work/500/500"
    },
    {
        title: "Golden Hour",
        artist: "Sunset Makers",
        folder: "Chill",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        cover: "https://picsum.photos/seed/golden-hour/500/500"
    },
    {
        title: "Jump Cut",
        artist: "Beat Studio",
        folder: "Workout",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        cover: "https://picsum.photos/seed/jump-cut/500/500"
    },
    {
        title: "After Dark",
        artist: "Green Room",
        folder: "Party",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
        cover: "https://picsum.photos/seed/after-dark/500/500"
    },
    {
        title: "Sky Arcade",
        artist: "No Copyright Beats",
        folder: "EDM",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
        cover: "https://picsum.photos/seed/sky-arcade/500/500"
    },
    {
        title: "Unity Sparks",
        artist: "Free Future",
        folder: "EDM",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
        cover: "https://picsum.photos/seed/unity-sparks/500/500"
    },
    {
        title: "Digital Flight",
        artist: "Arcade Nova",
        folder: "EDM",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
        cover: "https://picsum.photos/seed/digital-flight/500/500"
    },
    {
        title: "Laser Hearts",
        artist: "Festival Mode",
        folder: "EDM",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
        cover: "https://picsum.photos/seed/laser-hearts/500/500"
    },
    {
        title: "Pixel Rush",
        artist: "Gamewave",
        folder: "Gaming",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://picsum.photos/seed/pixel-rush/500/500"
    },
    {
        title: "Victory Loop",
        artist: "Level Up Audio",
        folder: "Gaming",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://picsum.photos/seed/victory-loop/500/500"
    },
    {
        title: "Power Drop",
        artist: "Bass Portal",
        folder: "Gaming",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://picsum.photos/seed/power-drop/500/500"
    },
    {
        title: "Dream Runner",
        artist: "Future Path",
        folder: "EDM",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "https://picsum.photos/seed/dream-runner/500/500"
    }
];

const audio = document.querySelector("#audioPlayer");
const folderList = document.querySelector("#folderList");
const songGrid = document.querySelector("#songGrid");
const searchInput = document.querySelector("#searchInput");
const playBtn = document.querySelector("#playBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const stopBtn = document.querySelector("#stopBtn");
const likeBtn = document.querySelector("#likeBtn");
const muteBtn = document.querySelector("#muteBtn");
const loopBtn = document.querySelector("#loopBtn");
const volumeControl = document.querySelector("#volumeControl");
const seekBar = document.querySelector("#seekBar");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const coverImage = document.querySelector("#coverImage");
const miniCover = document.querySelector("#miniCover");
const trackTitle = document.querySelector("#trackTitle");
const trackArtist = document.querySelector("#trackArtist");
const miniTitle = document.querySelector("#miniTitle");
const miniArtist = document.querySelector("#miniArtist");
const folderName = document.querySelector("#folderName");
const libraryTitle = document.querySelector("#libraryTitle");
const songCount = document.querySelector("#songCount");
const hidePlayerBtn = document.querySelector("#hidePlayerBtn");
const showPlayerBtn = document.querySelector("#showPlayerBtn");
const trackDrawer = document.querySelector("#trackDrawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const drawerCloseBtn = document.querySelector("#drawerCloseBtn");
const drawerCover = document.querySelector("#drawerCover");
const drawerFolder = document.querySelector("#drawerFolder");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerArtist = document.querySelector("#drawerArtist");
const drawerPlayBtn = document.querySelector("#drawerPlayBtn");
const drawerLikeBtn = document.querySelector("#drawerLikeBtn");
const miniTrack = document.querySelector(".mini-track");
const musicUpload = document.querySelector("#musicUpload");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenuBackdrop = document.querySelector("#mobileMenuBackdrop");
const mobileMenuCloseBtn = document.querySelector("#mobileMenuCloseBtn");

let currentIndex = 0;
let drawerIndex = 0;
let activeFolder = "All";
let loopMode = "off";
let filteredTracks = [...tracks];
let likedSongs = JSON.parse(localStorage.getItem("beatflowLikes") || "[]");
let localSongCount = 0;

// The app starts with a valid cover and track before the user presses play.
audio.volume = Number(volumeControl.value);
setTrack(0, false);
renderFolders();
renderSongs();

function getFolders() {
    return ["All", ...new Set(tracks.map((track) => track.folder)), "Liked"];
}

function renderFolders() {
    folderList.innerHTML = "";

    getFolders().forEach((folder) => {
        const count = getTracksByFolder(folder).length;
        const button = document.createElement("button");
        button.type = "button";
        button.className = `folder-btn ${folder === activeFolder ? "active" : ""}`;
        button.innerHTML = `<span>${folder}</span><span>${count}</span>`;
        button.addEventListener("click", () => {
            activeFolder = folder;
            renderFolders();
            renderSongs();
            closeMobileMenu();
        });
        folderList.appendChild(button);
    });
}

function addLocalSongs(files) {
    const firstNewIndex = tracks.length;

    Array.from(files)
        .filter((file) => file.type.startsWith("audio/"))
        .forEach((file) => {
            localSongCount += 1;
            const cleanTitle = file.name
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]+/g, " ")
                .replace(/\s+/g, " ")
                .trim();

            tracks.push({
                title: cleanTitle || `Local Song ${localSongCount}`,
                artist: "Local File",
                folder: "Local",
                src: URL.createObjectURL(file),
                cover: `https://picsum.photos/seed/local-${Date.now()}-${localSongCount}/500/500`
            });
        });

    activeFolder = "Local";
    renderFolders();
    renderSongs();

    if (tracks[firstNewIndex]) {
        openDrawer(firstNewIndex);
    }
}

function getTracksByFolder(folder) {
    if (folder === "All") {
        return tracks;
    }

    if (folder === "Liked") {
        return tracks.filter((track) => likedSongs.includes(track.title));
    }

    return tracks.filter((track) => track.folder === folder);
}

function renderSongs() {
    const query = searchInput.value.trim().toLowerCase();

    filteredTracks = getTracksByFolder(activeFolder).filter((track) => {
        const text = `${track.title} ${track.artist} ${track.folder}`.toLowerCase();
        return text.includes(query);
    });

    songGrid.innerHTML = "";
    libraryTitle.textContent = activeFolder === "All" ? "All Songs" : `${activeFolder} Songs`;
    songCount.textContent = `${filteredTracks.length} song${filteredTracks.length === 1 ? "" : "s"}`;

    if (!filteredTracks.length) {
        songGrid.innerHTML = `<div class="empty-state">No songs found in this folder.</div>`;
        return;
    }

    filteredTracks.forEach((track) => {
        const realIndex = tracks.indexOf(track);
        const isActive = realIndex === currentIndex;
        const isLiked = likedSongs.includes(track.title);
        const card = document.createElement("article");
        card.className = `song-card ${isActive ? "active" : ""}`;
        card.dataset.open = realIndex;
        card.innerHTML = `
            <img src="${track.cover}" alt="${track.title} cover">
            <div>
                <h3>${track.title}</h3>
                <p>${track.artist} - ${track.folder}</p>
            </div>
            <div class="card-actions">
                <button type="button" data-play="${realIndex}">${isActive && !audio.paused ? "Pause" : "Play"}</button>
                <button type="button" data-like="${track.title}">${isLiked ? "Unlike" : "Like"}</button>
            </div>
        `;
        songGrid.appendChild(card);
    });
}

function setTrack(index, shouldPlay = true) {
    currentIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentIndex];

    audio.src = track.src;
    coverImage.src = track.cover;
    miniCover.src = track.cover;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    miniTitle.textContent = track.title;
    miniArtist.textContent = track.artist;
    folderName.textContent = track.folder;
    updateLikeButton();
    updateDrawer();
    renderSongs();

    if (shouldPlay) {
        playCurrentTrack();
    }
}

function playCurrentTrack() {
    audio.play()
        .then(() => {
            playBtn.textContent = "Pause";
            updateDrawer();
            renderSongs();
        })
        .catch(() => {
            playBtn.textContent = "Play";
            alert("Audio could not start. Check internet connection because songs load from online demo links.");
        });
}

function togglePlay() {
    if (audio.paused) {
        playCurrentTrack();
    } else {
        audio.pause();
        playBtn.textContent = "Play";
        updateDrawer();
        renderSongs();
    }
}

function stopTrack() {
    audio.pause();
    audio.currentTime = 0;
    playBtn.textContent = "Play";
    seekBar.value = 0;
    currentTime.textContent = "0:00";
    updateDrawer();
    renderSongs();
}

function playNext() {
    const nextTrack = getNextTrack(1);
    setTrack(nextTrack, true);
}

function playPrevious() {
    const previousTrack = getNextTrack(-1);
    setTrack(previousTrack, true);
}

function getNextTrack(direction) {
    if (!filteredTracks.length) {
        return currentIndex;
    }

    const currentFilteredIndex = filteredTracks.indexOf(tracks[currentIndex]);
    const safeIndex = currentFilteredIndex === -1 ? 0 : currentFilteredIndex;
    const nextFilteredIndex = (safeIndex + direction + filteredTracks.length) % filteredTracks.length;
    return tracks.indexOf(filteredTracks[nextFilteredIndex]);
}

function toggleLike(title = tracks[currentIndex].title) {
    if (likedSongs.includes(title)) {
        likedSongs = likedSongs.filter((songTitle) => songTitle !== title);
    } else {
        likedSongs.push(title);
    }

    localStorage.setItem("beatflowLikes", JSON.stringify(likedSongs));
    updateLikeButton();
    renderFolders();
    renderSongs();
}

function updateLikeButton() {
    const title = tracks[currentIndex].title;
    likeBtn.textContent = likedSongs.includes(title) ? "Unlike" : "Like";
    likeBtn.classList.toggle("active", likedSongs.includes(title));
    updateDrawer();
}

function openDrawer(index) {
    drawerIndex = (index + tracks.length) % tracks.length;
    updateDrawer();
    trackDrawer.classList.add("open");
    trackDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
    trackDrawer.classList.remove("open");
    trackDrawer.setAttribute("aria-hidden", "true");
}

function updateDrawer() {
    if (!drawerCover) {
        return;
    }

    const track = tracks[drawerIndex];
    const isCurrentTrack = drawerIndex === currentIndex;
    const isLiked = likedSongs.includes(track.title);

    drawerCover.src = track.cover;
    drawerFolder.textContent = track.folder;
    drawerTitle.textContent = track.title;
    drawerArtist.textContent = track.artist;
    drawerLikeBtn.textContent = isLiked ? "Unlike" : "Like";
    drawerLikeBtn.classList.toggle("active", isLiked);
    drawerPlayBtn.textContent = isCurrentTrack && !audio.paused ? "Pause" : "Play";
}

function playDrawerTrack() {
    if (drawerIndex === currentIndex) {
        togglePlay();
        updateDrawer();
        return;
    }

    setTrack(drawerIndex, true);
}

function hidePlayer() {
    document.body.classList.add("player-hidden");
}

function showPlayer() {
    document.body.classList.remove("player-hidden");
}

function openMobileMenu() {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "Unmute" : "Mute";
    muteBtn.classList.toggle("active", audio.muted);
}

function cycleLoop() {
    const modes = ["off", "track", "playlist"];
    const nextMode = modes[(modes.indexOf(loopMode) + 1) % modes.length];
    loopMode = nextMode;
    audio.loop = loopMode === "track";
    loopBtn.textContent = `Loop: ${loopMode[0].toUpperCase()}${loopMode.slice(1)}`;
    loopBtn.classList.toggle("active", loopMode !== "off");
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", playPrevious);
nextBtn.addEventListener("click", playNext);
stopBtn.addEventListener("click", stopTrack);
likeBtn.addEventListener("click", () => toggleLike());
muteBtn.addEventListener("click", toggleMute);
loopBtn.addEventListener("click", cycleLoop);
searchInput.addEventListener("input", renderSongs);
hidePlayerBtn.addEventListener("click", hidePlayer);
showPlayerBtn.addEventListener("click", showPlayer);
drawerBackdrop.addEventListener("click", closeDrawer);
drawerCloseBtn.addEventListener("click", closeDrawer);
drawerPlayBtn.addEventListener("click", playDrawerTrack);
drawerLikeBtn.addEventListener("click", () => toggleLike(tracks[drawerIndex].title));
miniTrack.addEventListener("click", () => openDrawer(currentIndex));
musicUpload.addEventListener("change", (event) => {
    addLocalSongs(event.target.files);
    event.target.value = "";
    closeMobileMenu();
});
mobileMenuBtn.addEventListener("click", openMobileMenu);
mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

volumeControl.addEventListener("input", () => {
    audio.volume = Number(volumeControl.value);
    audio.muted = audio.volume === 0;
    muteBtn.textContent = audio.muted ? "Unmute" : "Mute";
});

seekBar.addEventListener("input", () => {
    if (Number.isFinite(audio.duration)) {
        audio.currentTime = (Number(seekBar.value) / 100) * audio.duration;
    }
});

audio.addEventListener("timeupdate", () => {
    if (Number.isFinite(audio.duration)) {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    }
});

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
    // Keep the music flowing: when one song finishes, the next one starts.
    if (loopMode !== "track") {
        playNext();
    }
});

songGrid.addEventListener("click", (event) => {
    const playTarget = event.target.closest("[data-play]");
    const likeTarget = event.target.closest("[data-like]");
    const cardTarget = event.target.closest("[data-open]");

    if (playTarget) {
        const index = Number(playTarget.dataset.play);
        if (index === currentIndex && !audio.paused) {
            togglePlay();
        } else {
            setTrack(index, true);
        }
        openDrawer(index);
        return;
    }

    if (likeTarget) {
        toggleLike(likeTarget.dataset.like);
        return;
    }

    if (cardTarget) {
        openDrawer(Number(cardTarget.dataset.open));
    }
});
