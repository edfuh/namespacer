#Namespacer

Because this:

    var app = app || {};
    app.Utils = app.Utils || {};

is ugly and this:

    ns('app.Utils')

looks better. And so does this:

    ns('app.Utils', {
        list : [0, 1, 2, 3, 4]
    })