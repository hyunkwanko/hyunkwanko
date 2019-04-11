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
// var disqus_config = function () {
//     this.page.url = 'https://hyunkwanko.github.io/sourcetree/';  // Replace PAGE_URL with your page's canonical URL variable
//     // this.page.identifier = 'localhost'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// };

// (function() { // DON'T EDIT BELOW THIS LINE
//     var d = document, s = d.createElement('script');
//     s.src = 'https://everyolo.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
// })();