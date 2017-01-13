var functionList = new Array();
var i18n;
var languages = new Array('en', 'fr');
var i = 0;
var commands = new Array();

$(function () {
    // Evite la mise en cache
    $.ajaxSetup({ cache: false });
});

/**
*   Récupération des paramètres passés en GET
**/
getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
*   Formate le contenu
**/
formatContent = function (content) {
    //return '<p>' + content + '</p>';
    var output = '';
    var isSpecialChar = false;
    for(var i = 0; i < content.length; i++) {
        if (content[i] === '&' || isSpecialChar) {
            if (content[i] === '&'){
                output += '<span class="js-out">' + content[i];
                isSpecialChar = true;
            }
            else if (content[i] === ';'){
                output += content[i] + '</span>';
                isSpecialChar = false;
            }
            else
                output += content[i];
        } else
            output += '<span class="js-out">' + content[i] + '</span>';
    }
    return output;
    // return content;
}

var inprogress = false;
checkQueue = function(){
    if (!inprogress){
        inprogress = true;
        q.dequeue();
    }
    setTimeout(
        checkQueue
    , 50);
}

/**
*   Anime le contenu
**/
animateOutput = function (item, i, length) {
    setTimeout(function () {
        $(item).removeClass('js-out').addClass('js-in');
        if (i === length - 1)
            inprogress = false;
    }, (50 * i));
}

/**
*   Affiche le contenu
**/
var q = $({});
showContent = function (content) {
    q.queue(function (){
        var uniqueId = '';
        if (typeof arguments[1] !== 'undefined')
            uniqueId = Math.floor((Math.random() * 100000) + 1);
        
        //$('#out').append(formatContent(content)).hide;
        var item = $('<p/>', {
            'id': uniqueId,
            //'class': className,
            html: formatContent(content)
        }).appendTo('#out');
        //$('#out').writeText(formatContent(content));

        $('.js-out', item).each(function(i) {
            animateOutput(this, i, $('.js-out', item).length);
        });

        $('#out').animate({ scrollTop: $('#out')[0].scrollHeight }, 750);
        //$('#out').scrollTop($('#out')[0].scrollHeight);

        $('#in').focus();
    });
}

/**
*   Supprime le texte saisi par l'utilisateur
**/
clearInput = function () {
    $('#in').val('');
}

/**
*   Détermine si le mot clé est une fonction connue
**/
checkFunction = function (functionName) {
    var isFunction = false;
    for (var section in functionList) {
        if ($.inArray(functionName.toLowerCase(), functionList[section]) >= 0) {
            isFunction = true;
            break;
        }
    }
    return isFunction;
}

/**
*   Affiche la saisie de l'utilisateur et appelle la fonction demandée le cas échéant
**/
displayInput = function () {
    var input = $('#in').val();
    commands.push(input);
    showContent('> ' + input, 'command');
    var functionName = input.split(' ')[0];
    var functionArgs = input.split(' ').splice(1);
    if (checkFunction(functionName))
        executeFunctionByName(functionName, matriXv, functionArgs);
    
    clearInput();
}

/**
*   Exécute la fonction si elle se trouve dans la liste des fonctions
*       -> peut supporter un argument
**/
executeFunctionByName = function (functionName, context /*, args */) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func.toLowerCase()].apply(this, args);
}

/**
*   Parse l'objet (JSON) récursivement
**/
iterate = function(obj, items) {
    var level = (arguments[2]) ? arguments[2] : 0;
    for (var key in obj) {
        var elem = obj[key];
        if (typeof elem === 'object') {
            items.push('<p>' + setSpacer(level) + key + ' : {</p>');
            iterate(elem, items, level + 1);
            items.push('<p>' + setSpacer(level) + '}</p>');
        } else
            items.push('<p>' + setSpacer(level) + key + ' : ' + elem + '</p>');
    }
}

/**
*   Ajoute un nombre de caractères correspondant au "level"
**/
setChars = function (level, char) {
    var spacer = '';
    for (var i = 0; i < level; i++) {
        spacer += char;
    }
    return spacer;
}

/**
*   Ajoute un niveau d'espaces correspondant au "level"
**/
setSpacer = function (level) {
    var spacer = setChars(level, '&nbsp;');
    //spacer = '<span style="display:inline;margin-left:' + level * 5 + 'px"/>';
    return spacer;
}

/**
*   Liste les fonctions disponibles dans le namespace "matriXv"
**/
getFunctionList = function (namespace, array) {
    $.get('js/' + namespace + '.js', function (data) {
        var x = data.match(/(.*): function/g).map(function (x) {
            return x.replace(/: function/g, '').trim();
        });

        for (var key in x) {
            var i = x[key].match('/*(.*)*/')[0]; // On récupère la première valeur
            var section = i.replace('/*', '').replace('*/', '').trim();
            var func = x[key].replace(i, '').trim();

            if (typeof array[section] === 'undefined')
                array[section] = new Array();
            
            array[section].push(func);
        }

        // Ordonne alphabetiquement
        for (var key in array) {
            array[key].sort(function (a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
        }
    })
}

/**
*   Affiche la liste des items avec la valeur correspondante
**/
getItems = function (items, message) {
    if (typeof items === 'undefined')
        showContent(message);
    else {
        for (var key in items) {
            var item = items[key];
            showContent(key + ' : ' + setChars(item, '&#9733;'));
        }
    }
}

/**
*   Extension Jquery --> C# String.Format
**/
String.prototype.format = String.prototype.f = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};

/**
*   Extension Jquery pour l'affichage des éléments lettre par lettre
**/
//(function ($) {
//    $.fn.writeText = function (content) {
//        var contentArray = content.split(''),
//            current = 0,
//            elem = this;
//        var interval = setInterval(function () {
//            if (current == contentArray.length) {
//                clearInterval(interval);
//                //callback();
//                return;
//            }
//            if (current < contentArray.length) {
//                elem.text(elem.text() + contentArray[current++]);
//            }
//        }, 100);
//    };

//})(jQuery);