// Particles
particlesJS.load('particles-js', '../../static/particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Lodaing
$(document).ready(function () {
    $.fakeLoader({
        bgColor: '#111',
        spinner:"spinner7"
    });
});