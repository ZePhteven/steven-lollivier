// Dans le contexte d'une sous-fonction, on ne peut pas utiliser "this" -- Au dela de ça, on utilise des appels qui ne permettent pas de le faire.
var stories = {
    author: "Steven LOLLIVIER",
    currentStory: undefined,
    currentPage: 0, // Pour le moment chapter = page
    pagesNumber: 0,
    /* navigation */get: function (storyId) {
        $.getJSON('../data/stories/' + storyId + '.json', function (data) {
            stories.currentStory = data.story;
            stories.summary();

            if (storyId == 0) {
                $('.dropdown-menu.stories').html('');
                // On charge le menu
                for (key in stories.currentStory.chapters) {
                    var chapter = stories.currentStory.chapters[key];
                    stories.pagesNumber++;
                    if (chapter.title != '') {
                        $('<a/>', {
                            'href': '#',
                            'class': 'story-item',
                            'rel': key + 1,
                            html: chapter.title
                        }).appendTo($('<li/>').appendTo($('.dropdown-menu.stories')));
                    }
                }

                // Si on charge la main page, on attache les liens vers les histoires
                $('.story-item').click(function (e) {
                    e.preventDefault();
                    stories.get($(this).attr('rel'));
                });
                $('.navigation-action').hide();
            } else {
                $('.navigation-action').show();
            }

            // Le sommaire ne sera pas toujours visible
            $('.navigation #summary').hide();
        }).fail(function () {
            //showContent(i18n.messages.errorGettingStory);
        });
    },
    /* navigation */set: function () {
        $('.story-container .page').html(stories.currentStory.chapters['chapter-' + stories.currentPage].content);
        $('.page-number').html('Page ' + (stories.currentPage + 1) + '/' + stories.pagesNumber);
    },
    /* navigation */summary: function () {
        stories.currentPage = 0;
        $('.story-container .story-title').html(stories.currentStory.title);
        $('.story-container .story-teaser').html(stories.currentStory.teaser);

        $('.story-container .chapter-list').html('');
        stories.pagesNumber = 0;
        for (key in stories.currentStory.chapters) {
            var chapter = stories.currentStory.chapters[key];
            stories.pagesNumber++;
            if (chapter.title != '') {
                $('<span/>', {
                    //'id': uniqueId,
                    'class': 'chapter',
                    html: chapter.title
                }).appendTo($('<li/>').appendTo($('.story-container .chapter-list')));
            }
        }
        $('.story-container .chapter-list').show();

        $('.story-container .page').html('');
        $('.page-number').html('');

        // Aucun chapitre n'a de titre
        if ($('.story-container .chapter-list').html() == '') {
            stories.first();
        } else {
            $('.navigation #summary').show();
        }
    },
    /* navigation */first: function () {
        $('.story-container .chapter-list').hide();
        stories.currentPage = 0;
        stories.set();
    },
    /* navigation */previous: function () {
        $('.story-container .chapter-list').hide();
        if (stories.currentPage > 0) {
            stories.currentPage--;
        }
        
        stories.set();
    },
    /* navigation */next: function () {
        $('.story-container .chapter-list').hide();
        if (stories.currentPage < stories.pagesNumber - 1) {
            stories.currentPage++;
        }

        stories.set();
    },
    /* navigation */last: function () {
        $('.story-container .chapter-list').hide();
        stories.currentPage = stories.pagesNumber - 1;
        stories.set();
    },
}