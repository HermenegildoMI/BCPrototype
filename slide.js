(function () {
    /*CODE WRITTEN PURELY TO PRESENT. NOT EFFICIENT AT ALL!!!*/
    function UrlRender() {
        var self = this;
        self.render = function (url, events) {
            self.currentHash = url;

            //page render logic
            var fnStr;
            if (!url) {
                fnStr = urlMap['redirect'];
            } else {
                var mappedUrl = url.replace('#', '').split('/').join('_');
                fnStr = urlMap[mappedUrl] || urlMap['redirect'];
            }
            pageViewFn[fnStr](events);
        }
        var urlMap = {
            //url : pageViewFn
            'home': 'homePageFn',
            'about': 'aboutPageFn',
            'study': 'studyPageFn',
            'contact-us': 'contactPageFn',
            'innovate': 'innovatePageFn',
            'campus-life': 'campusPageFn',
            'news': 'newsPageFn',
            'media': 'mediaPageFn',
            'apply': 'applyPageFn',
            'redirect': 'homePageFn'
        }
        var pageViewFn = {
            //page view
            'homePageFn': function () {
                this.__showPage('BC');
            },
            'aboutPageFn': function () {
                this.__showPage('ABOUT');
                this.__changeBg('images/BC_0075%20copy.jpg');
            },
            'studyPageFn': function () {
                this.__showPage('STUDY@BC'); //images/BC_006.jpg
                this.__changeBg('/images/BC_006.jpg');
            },
            'contactPageFn': function () {
                this.__showPage('CONTACT US');
                this.__changeBg('images/BC_0073.jpg');

            },
            'innovatePageFn': function () {
                this.__showPage('INNOVATE@BC');
                this.__changeBg('images/BC_00153%20copya.jpg');
            },
            'campusPageFn': function () {
                this.__showPage('CAMPUS LIFE');
                this.__changeBg('images/BC_0062.jpg');
            },
            'newsPageFn': function () {
                this.__showPage('NEWS');
                this.__changeBg('images/BC_00153%20copya.jpg');
            },
            'mediaPageFn': function () {
                this.__showPage('MEDIA');
                this.__changeBg('images/BC_00153%20copya.jpg');
            },
            'applyPageFn': function () {
                this.__showPage('APPLY');
                this.__changeBg('images/BC_00153%20copya.jpg');
            },
            __showPage: function (page) {
                $('.content-heading-text h1').first().html(page);
            },
            __changeBg: function (imgsrc) {
                $('.img-context-holder').css('background', `url(${imgsrc}) no-repeat center center`);
                $('.img-context-holder').css('background-size', 'cover');
            }
        }
    }
    var urlRender = new UrlRender();
    $(document).ready(function () {
        window.location.hash = '';

        $('body').on('click', 'a', function () {
            //sidebar menu animations
            var isParent = $(this).data('parent');
            if (isParent) {
                $(this).parent().find('ul').toggleClass('hide-menu show-menu');
            }
            //navigation content 
            $('.container-content').hide()
            var content = $(this).data('id');
            $("#" + content).show();
            console.log(content);
            if (content.includes("top")) {
                $('.context').toggleClass('top-menu-show');
            }

            setTimeout(function () {
                var hasClass = $('.context').hasClass('menu-show');
                if (!hasClass) urlRender.render(decodeURI(window.location.hash));
                else urlRender.render('');
                $('.context').toggleClass('menu-show');
                $('.content-heading section').toggleClass('yellow-section-change');

            }, 0)

        });
        
        
    });

})();
