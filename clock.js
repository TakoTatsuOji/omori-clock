let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let phase = document.querySelector("#phase");
let UTCMode = document.querySelector(".change-time-zone-mode");
let date = document.querySelector(".date");
let birthDay = document.querySelector("#birthday");
let iconOMORI = document.querySelector(".icon");

let intervalLocal;
let intervalUTC;


//* time for Local
function timeLocal() {
    document.body.removeAttribute("onload");
    document.body.setAttribute("onload", "timeLocal()");
    let d = new Date();

    intervalLocal = setInterval(() => {
        let hr = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        let am = "AM";

        if (hr > 12) {
            hr = hr - 12;
            am = "PM"
        }

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;
        phase.innerHTML = am;

    });

    clearInterval(intervalUTC);

    iconOMORI.style.backgroundImage = "url(img/sunny-violin.gif)";
    UTCMode.innerHTML = "UTC/GMT mode";
    UTCMode.removeAttribute("onclick");
    UTCMode.setAttribute("onclick", "timeUTC()");
    date.innerHTML = d.toDateString();


    LocalBirthday(d);
}

//* time for Universal
function timeUTC() {
    document.body.removeAttribute("onload");
    document.body.setAttribute("onload", "timeUTC()")
    let d = new Date();

    intervalUTC = setInterval(() => {
        let hr = new Date().getUTCHours();
        let min = new Date().getUTCMinutes();
        let sec = new Date().getUTCSeconds();
        let am = "UTC";

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;
        phase.innerHTML = am;
    }, 1000)

    clearInterval(intervalLocal);

    iconOMORI.style.backgroundImage = "url(img/omori-violin.gif)";
    UTCMode.innerHTML = "LocalTime mode";
    UTCMode.removeAttribute("onclick");
    UTCMode.setAttribute("onclick", "timeLocal()");
    date.innerHTML = d.toDateString();

    UTCBirthday(d);
}


// pause play for audio
let musik = document.getElementsByTagName('audio')[0];
let togglePlayPause = document.querySelector(".note");
let isPlayToggled = true;


togglePlayPause.addEventListener('click', function() {

    if (isPlayToggled === true) {
        musik.play();
        isPlayToggled = false;
        return
    }

    if (isPlayToggled === false) {
        musik.pause();
        isPlayToggled = true;
        return
    }
})

//* a functions consists of conditions where if the current day is a certain character's birthday 

function LocalBirthday(d) {
    //TODO: refactor(done)

    let milliSec = 24 * 60 * 60 * 1000;

    const clearClassName = (name) => {
        birthDay.classList.remove(name)
    }

    let name;
    const month = d.getMonth(),
        date = d.getDate();

    if (month === 0 && date === 1) {
        name = "hero"
    } else if (month === 1 && date === 18) {
        name = "basil"
    } else if (month === 2 && date === 1) {
        name = "mari"
    } else if (month === 4 && date === 23) {
        name = "aubrey"
    } else if (month === 6 && date === 20) {
        name = "sunny"
    } else if (month === 10 && date === 11) {
        name = "kel"
    }

    const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);

    birthDay.textContent = `🎂 ${capitalizedName}'s birthday`
    birthDay.classList.add(name);
    setTimeout(clearClassName, milliSec, name);
}

function UTCBirthday(d) {
    let milliSec = 24 * 60 * 60 * 1000;

    const clearClassName = (name) => {
        birthDay.classList.remove(name)
    }

    let name;
    const month = d.getUTCMonth(),
        date = d.getUTCDate();

    if (month === 0 && date === 1) {
        name = "hero"
    } else if (month === 1 && date === 18) {
        name = "basil"
    } else if (month === 2 && date === 1) {
        name = "mari"
    } else if (month === 4 && date === 23) {
        name = "aubrey"
    } else if (month === 6 && date === 20) {
        name = "sunny"
    } else if (month === 10 && date === 11) {
        name = "kel"
    }

    const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);

    birthDay.textContent = `🎂 ${capitalizedName}'s birthday`
    birthDay.classList.add(name);
    setTimeout(clearClassName, milliSec, name);
}