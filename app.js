document.addEventListener("DOMContentLoaded", function(){

    function getTime(){
        var displayHours = document.getElementById("hours");
        var displayMinutes = document.getElementById("minutes");
        var displaySeconds = document.getElementById("seconds");
        var leftColon = document.getElementById("left-colon");
        var rightColon = document.getElementById("right-colon");

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

        if(fetchHours<=12){
            document.body.style.backgroundImage = "url('Images/sunrise.jpg')";
            displayHours.style.color = "#0D1B1E";
            displayMinutes.style.color = "#0D1B1E";
            displaySeconds.style.color = "#0D1B1E";
            leftColon.style.color = "#0D1B1E";
            rightColon.style.color = "#0D1B1E";
        }
        else{
            document.body.style.backgroundImage = "url('Images/sunset.jpg')";
            displayHours.style.color = "#EBEBEB";
            displayMinutes.style.color = "#EBEBEB";
            displaySeconds.style.color = "#EBEBEB";
            leftColon.style.color = "#EBEBEB";
            rightColon.style.color = "#EBEBEB";
        }
    };

    setInterval(getTime, 1000); //execute the code every 1 second
});
