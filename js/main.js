

const date = new Date();
const weekday  = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


// if(weekday[date.getDay()] === "Friday") {
    const animContainer = document.getElementById('loader');

    const animation = lottie.loadAnimation({
        container: animContainer,
        renderer: 'svg',
        autoplay: true,
        loop: 1,
        path: 'data/vignette_v.06.json'
    });

    animation.addEventListener('DOMLoaded', function() {
        animation.addEventListener('loopComplete', function() {
            animContainer.style.display = 'none';
        });
        // setCustomText("Fasit is back!")
    });

// }

function setCustomText(text) {
    // Get tspan element
    const textRef = document.getElementById('loader-text').getElementsByTagName("tspan")[0];
    textRef.innerHTML = text;
}
