document.addEventListener("DOMContentLoaded", function(){
    
    function getTime(){
        var displayHours = document.getElementById("hours");
        var displayMinutes = document.getElementById("minutes");
        var displaySeconds = document.getElementById("seconds");

        var fetchTime = new Date;
        var fetchHours = fetchTime.getHours();
        var fetchMinutes = fetchTime.getMinutes();
        var fetchSeconds = fetchTime.getSeconds();

        fetchHours = fetchHours < 10 ? "0"+fetchHours : fetchHours;
        fetchMinutes = fetchMinutes < 10 ? "0"+fetchMinutes : fetchMinutes;
        fetchSeconds = fetchSeconds < 10 ? "0"+fetchSeconds : fetchSeconds;

        displayHours.innerHTML = fetchHours;
        displayMinutes.innerHTML = fetchMinutes;
        displaySeconds.innerHTML = fetchSeconds;
    };

    setInterval(getTime, 1000); //execute the code every 1 second
});
