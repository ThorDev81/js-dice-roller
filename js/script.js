var results = $('#results');
$(document).on("click", ".roll", function(e) {
    e.preventDefault();
    var total = 0;
    var response = "";
    var die = $(this).data('id');
    var qty = $('#qty').val();

    for( var i = 0; i < qty; i++ ) {
        total = total + ( Math.floor( Math.random() * parseInt( die ) ) + 1 );
    }

    if( die == 100 ) {
        response = 'Percentile rolled resulting in ' + total + '%.';
    } else {
        response = qty + 'D' + die + ' rolled resulting in ' + total + '.';
    }

    var t = ( ( results.val() ? results.val() + "\n" : "" ) + response ).split("\n");

    if ( t.length > 10 )
        t = t.slice( t.length - 10 );

    results.val( t.join("\n") );

});
