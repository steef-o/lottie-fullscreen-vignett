const animContainer = document.getElementById('loader');

const animation = lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    autoplay: true,
    loop: 1,
    path: 'data/vignett_v.03.json'
});

animation.addEventListener('DOMLoaded', function() {
    animation.addEventListener('loopComplete', function() {
        animContainer.style.display = 'none';
    });

    //tspan element
    const text = document.getElementById('loader-text').children[0].children[0];

    // const setText = newText => {
    //     text.innerHTML = newText;
    // };
    // setText('Fasit is back!');
});
//
// const getJokeFromAPI = async () => {
//     const data = await fetch(`https://icanhazdadjoke.com/`).then(res => {
//         return res.data;
//     }).then(data)
//
// };
//
// console.log(getJokeFromAPI());
