//  Digital clock

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const format = document.getElementById("format");
const dates = document.getElementById("date");
const dayshow = document.getElementById("day");

setInterval(function () {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    format.innerHTML = h > 12 ? "PM" : "AM";
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    hours.innerHTML = h < 10 ? `0${h}:` : `${h}:`;
    minutes.innerHTML = m < 10 ? `0${m}` : m;
    seconds.innerHTML = s < 10 ? `0${s}` : s;

    let year = date.getFullYear();
    let month = date.getMonth(); // 0-11
    let dateShow = date.getDate();

    if (month < 10) {
        month = "0" + (1 + month);
    }
    dates.innerHTML = `${year}- ${month}-${dateShow}`;

    let getday = date.getDay(); // 0-6
    let day;
    if (getday == 0) {
        day = "Sun";
    } else if (getday == 1) {
        day = "Mon";
    } else if (getday == 2) {
        day = "Tues";
    } else if (getday == 3) {
        day = "Wed";
    } else if (getday == 4) {
        day = "Thurs";
    } else if (getday == 5) {
        day = "Fri";
    } else if (getday == 6) {
        day = "Satur";
    }
    dayshow.innerHTML = day;
}, 1000);


// Timer with Loader
const starttimer = document.getElementById("starttimer");
const stoptimer = document.getElementById("stoptimer");
const resettimer = document.getElementById("resettimer");
const timerProggress = document.getElementById("timerProggressBar");
const timerInput = document.getElementById("timerInput");
const timerOut = document.getElementById("timerOut");


let count;
let timer;
starttimer.addEventListener("click", function () {
    count = timerInput.value;
    timer = setInterval(function () {
        timerOut.innerText = count;
        starttimer.style.pointerEvents = "none";
        timerProggress.style.width = `${timers(timerInput.value, count)}%`;
        if (count == 0) {
            clearInterval(timer);
        }
        count--;
    }, 1000);
});

stoptimer.addEventListener("click", function () {
    clearInterval(timer);
    starttimer.style.pointerEvents = "auto";
});

resettimer.addEventListener("click", function () {
    count = 0;
    timerProggress.style.width = `${count}%`;
    timerOut.innerText = count;
    starttimer.style.pointerEvents = "auto";
    timerInput.value = "";
    clearInterval(timer);
});


// To do list
const doInput = document.getElementById("doInput");
const dolist = document.getElementById("dolist");
const errMsg = document.getElementById("todoError");
const todobtn = document.getElementById("todobtn");

todobtn.addEventListener("click", function () {
    if (doInput.value == "") {
        errMsg.innerHTML = `<p class="alert alert-danger"> Add some item </p>`;
    } else {
        let listItem = document.createElement("li");
        dolist.appendChild(listItem);
        listItem.className = "list-group-item";
        listItem.innerText = doInput.value;
        doInput.value = '';
        errMsg.innerHTML = '';

    }
});

// Subject Marks app with notification color 

const marksInput = document.getElementById('marksInput');
const showResult = document.getElementById('showResult');
const checkMarks = document.getElementById('checkMarks');

checkMarks.addEventListener('click',function(){
    if( marksInput.value == '' ){
        showResult.innerHTML = `<p class="alert alert-danger">Please Input Marks</p>`;
    }else{
        let result = checkResult(marksInput.value);
        showResult.innerHTML = `<p class="alert alert-${result.bg}">Your Grade: ${result.grade} <br> ${result.Status}</p>`;
    }
});