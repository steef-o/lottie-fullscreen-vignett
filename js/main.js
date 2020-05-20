const date = new Date();
const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

// if (weekday[date.getDay()] === 'Tuesday') {
    const characterContainer = document.getElementById('character');
    const backdropContainer = document.getElementById('backdrop');

    const backdrop = lottie.loadAnimation({
        container: backdropContainer,
        renderer: 'svg',
        autoplay: true,
        loop: false,
        path: 'data/backdrop_v.02.json',
        rendererSettings: {
            preserveAspectRatio: 'none'
        }
    });

    const character = lottie.loadAnimation({
        container: characterContainer,
        renderer: 'svg',
        autoplay: true,
        loop: false,
        path: 'data/character_v.02.json',
    });

    backdrop.addEventListener('DOMLoaded', function() {
        backdropContainer.style.width = '100vw';
        backdropContainer.style.height = '100vh';

        backdrop.playSegments([1, 240], true);
        backdrop.addEventListener('complete', function() {
            backdropContainer.style.display = 'none';
            characterContainer.style.display = 'none';
        });
        // setCustomText("Fasit is back!")
    });
// }

function setCustomText(text) {
    // Get tspan element
    const textRef = document
        .getElementById('loader-text')
        .getElementsByTagName('tspan')[0];
    textRef.innerHTML = text;
}
