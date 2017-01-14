var MatriXv = {
    author: "Steven LOLLIVIER",
    society: 'Lemon',
    product: 'Mocintash',
    version: '1.0.3',
    year: '2017',
    /* main */help: function () {
        for (var section in functionList) {
            showContent('-- ' + section + ' --');
            for (key in functionList[section]) {
                var functionName = functionList[section][key];
                showContent(functionName + ' : ' + i18n['functions'][functionName]);
            }
        }
    },
    /* main */clear: function () {
        $('#out').empty();
        showContent(i18n.messages.welcome.format(MatriXv.product, MatriXv.version, MatriXv.society, MatriXv.year));
        showContent('> ' + i18n.messages.help);
    },
    /* main */cls: function () {
        MatriXv.clear();
    },
    /* main */setlang: function (lng) {
        if ($.isArray(lng))
            lng = lng[0];

        if (languages.indexOf(lng) >= 0) {
            $.getJSON('data/i18n/' + lng + '.json', function (data) {
                i18n = data;
                MatriXv.clear();
            }).fail(function () {
                showContent(i18n.messages.noLanguage);
            });
        } else if (typeof i18n !== 'undefined')
            showContent(i18n.messages.noLanguage);
    },
    /* main */getuser: function (userId) {
        if ($.isArray(userId))
            userId = userId[0];
        showContent('> ' + i18n.messages.loadingUser);
        $.getJSON('data/users/' + userId + '.json', function (data) {
            user = data.user;
            showContent(i18n.messages.userLoaded);
            //matriXv.parse();
        }).fail(function () {
            showContent(i18n.messages.noUser);
        });
    },
    /* main */parse: function () {
        var items = [];
        iterate(user, items);
        showContent(items);
    },
    /* main */reload: function () {
        $.getJSON('data/users/' + user.id + '.json', function (data) {
            user = data.user;
            //matriXv.parse();
            showContent(i18n.messages.dataReloaded);
        }).fail(function () {
            showContent(i18n.messages.noUser);
        });
    },
    /* cv */identity: function () {
        MatriXv.name();
        MatriXv.birthdate();
        MatriXv.nationality();
    },
    /* cv */name: function () {
        var content = "";
        content = i18n.genders[user.identity.gender] + ' ' + user.identity.lastname + ' ' + user.identity.firstname;
        showContent(content);
    },
    /* cv */firstname: function () {
        showContent(user.identity.firstname);
    },
    /* cv */lastname: function () {
        showContent(user.identity.lastname);
    },
    /* cv */birthdate: function () {
        showContent(user.identity.birthdate);
    },
    /* cv */nationality: function () {
        showContent(user.identity.nationality);
    },
    /* cv */address: function () {
        showContent(user.address['address-1']);
        showContent(user.address['address-2']);
        showContent(user.address.zip + ' ' + user.address.city);
        //for (var key in user.address) {
        //    var address = user.address[key];
        //    showContent(address);
        //}
    },
    /* cv */phone: function () {
        showContent(user.phone);
    },
    /* cv */email: function () {
        showContent(user.email);
    },
    /* cv */job: function () {
        showContent(user.job);
    },
    /* cv */education: function () {
        //var content = "";
        for (var key in user.education) {
            var exp = user.education[key];
            var level = 'Bac' + ((exp.level > 0) ? ' + ' + exp.level : '');
            showContent(exp.startdate + ' - ' + exp.enddate + ' : [' + exp.diploma + '] ' + exp.school + ' (' + level + ')');
        }
        //showContent(content);
    },
    /* cv */experiences: function () {
        //var content = "";
        for (var key in user.experiences) {
            var exp = user.experiences[key];
            showContent(exp.startdate + ' - ' + exp.enddate + ' : [' + exp.title + '] ' + exp.company + ' (' + i18n.jobType[exp.type] + ')');
        }
        //showContent(content);
    },
    /* cv */picture: function () {
        $.get('data/users/pictures/' + user.id + '.data', function (data) {
            console.log('data/users/pictures - success');
            showContent(data, false, true);
            // showContent(data);
        }).fail(function () {
            showContent(i18n.messages.noPicture);
        });
    },
    /* cv */skills: function () {
        getItems(user.skills, i18n.messages.noSkills);
    },
    /* cv */references: function () {
        for (var key in user.references) {
            var ref = user.references[key];
            showContent(ref.title + ' (<a href="' + ref.link + '">' + ref.link + '</a>)');
        }
    },
    /* cv */languages: function () {
        getItems(user.languages, i18n.messages.noLanguages);
    },
    /* cv */hobbies: function () {
        for (var key in user.hobbies) {
            showContent(user.hobbies[key]);
        }
    },
    /* cv */resume: function () {
        showContent('-- ' + i18n.keywords.identity + ' --');
        MatriXv.identity();
        MatriXv.email();
        showContent('-- ' + i18n.keywords.job + ' --');
        MatriXv.job();
        showContent('-- ' + i18n.keywords.education + ' --');
        MatriXv.education();
        showContent('-- ' + i18n.keywords.experiences + ' --');
        MatriXv.experiences();
        showContent('-- ' + i18n.keywords.skills + ' --');
        MatriXv.skills();
        showContent('-- ' + i18n.keywords.languages + ' --');
        MatriXv.languages();
    },
    /* other */stories: function () {
        showContent(i18n.messages.stories);
        this.location = this.location + '/stories';
        //showContent('<a href="./stories/">' + i18n.keywords.stories + '</a>');
    }
};