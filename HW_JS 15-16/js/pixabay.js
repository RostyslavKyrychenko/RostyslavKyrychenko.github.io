function pixabayCallback (data) {

    $('.imageSearchResults').empty();

    var hits = data.hits;

    var length = hits.length;
    var i = 0;

    for (i = 0; i < length; i++) {
        var src = hits[i].previewURL;
        var img = document.createElement('img');

        $(img).attr('src', src);
        $('.imageSearchResults').append(img);
    }
}

$(function () {
    $('#searchButton').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'https://pixabay.com/api/',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                key: '2742492-9536ff72eec84f71203b2f31e',
                q: $('#userQuery').val()
            },
            success: pixabayCallback
        });
    });
});
