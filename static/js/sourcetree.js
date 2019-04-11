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


// Disqus

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://everyolo.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();