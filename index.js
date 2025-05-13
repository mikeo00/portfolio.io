
    window.onload = function () {
        var menuBtn = document.querySelector('.menu-btn');
        var navLinks = document.querySelector('.nav-links');

        if (menuBtn && navLinks) {
            menuBtn.onclick = function () {
                if (navLinks.className.indexOf('active') === -1) {
                    navLinks.className += ' active';
                } else {
                    navLinks.className = navLinks.className.replace(' active', '');
                }
            };
        }

        var anchors = document.getElementsByTagName('a');
        for (var i = 0; i < anchors.length; i++) {
            (function (anchor) {
                var href = anchor.getAttribute('href');
                if (href && href.indexOf('#') === 0) {
                    anchor.onclick = function (e) {
                        var targetId = href.substring(1);
                        var target = document.getElementById(targetId);
                        if (target) {
                            var scrollTo = target.offsetTop - 70;
                            window.scrollTo(0, scrollTo);
                        }
                        if (navLinks && navLinks.className.indexOf('active') !== -1) {
                            navLinks.className = navLinks.className.replace(' active', '');
                        }
                        return false;
                    };
                }
            })(anchors[i]);
        }

        var contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.onsubmit = function () {
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var message = document.getElementById('message').value;

                name = name.replace(/^\s+|\s+$/g, '');
                email = email.replace(/^\s+|\s+$/g, '');
                message = message.replace(/^\s+|\s+$/g, '');

                if (name && email && message) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('Please fill in all fields.');
                }
                return false;
            };
        }
        var projects = document.getElementsByClassName('project');

        function animateOnScroll() {
            var triggerPoint = window.innerHeight ? (window.innerHeight - 100) : (document.documentElement.clientHeight - 100);

            for (var i = 0; i < projects.length; i++) {
                var project = projects[i];
                var rect = project.getBoundingClientRect();
                var top = rect.top;

                if (top < triggerPoint) {
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                    project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }
            }
        }

        animateOnScroll();
        window.onscroll = animateOnScroll;
    };