var user;

$(function () {
    // Evite la mise en cache
    $.ajaxSetup({ cache: false });

    // Initialise la langue en anglais
    MatriXv.setlang('en');

    // Initialise l'utilisateur (indiqué en GET ou 0 par défaut)
    setTimeout(loadUser, 2000);

    // Initialise la liste des fonctions disponibles dans le namespace indiqué
    getFunctionList('matriXv', functionList);

    $('#in').keydown(function (e) {
        if (e.ctrlKey) {
            if (e.which == 67)
                flushContent();
        } else {
            switch (e.which) {
                case 13:
                    displayInput();
                    i = commands.length - 1;
                    break;
                case 38:
                    if (commands.length !== 0) {
                        var value = commands[i];
                        $('#in').val(value);
                        if (i > 0)
                            i--;

                        //$('#in').get(0).setSelectionRange(value.length * 2, value.length * 2);
                    }
                    break;
                case 40:
                    if (commands.length !== 0) {
                        var value = commands[i];
                        $('#in').val(value);
                        if (i < commands.length - 1)
                            i++;

                        //$('#in').get(0).setSelectionRange(value.length * 2, value.length * 2);
                    }
                    break;
            }
        }
    }).focus();

    // Focus on input
    $(document).on('click', function (e) {
        if($(e.target).is('#out, .in') || $('#out, .in').has(e.target).length)
            return;//e.stopPropagation();
        $('#in').focus();
    });

    // Lance la méthode de check
    setTimeout(checkQueue, 75);
});

/**
*   Initialise l'utilisateur (indiqu� en GET ou 0 par d�faut)
**/
loadUser = function () {
    var userId = 0;
    if (getParameterByName('userId') !== '')
        userId = getParameterByName('userId');

    MatriXv.getuser(userId);
}