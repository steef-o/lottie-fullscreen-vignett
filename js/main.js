const animContainer = document.getElementById('loader');

const animation = lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    autoplay: true,
    loop: 1,
    path: 'data/vignett_v.02.json'
});

animation.addEventListener('data_ready', function() {
    animation.addEventListener('loopComplete', function() {
        animContainer.style.display = 'none';
    });
});
