var trainData;
// Places API van NS
$(function() {
    var params = {
        // Request parameters
    };

    $.ajax({
        url: "https://gateway.apiportal.ns.nl/places-api/v2/places/incorrect?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","cedd634a768842bc8657ed8a82b49b19");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        for(var i = 0; i< data.payload.value2.length; i++){          
        $('#station').append(
                
                '<tr>' +
                '<td>' + data.payload.value2[i].name + '</td>'+
                '<td>' + data.payload.value2[i].type + '</td>' +
                '<td>' + data.payload.value2[i].categories + '</td>' +
                '</tr>'    
            )
        } 
        //console.log(data);
        //console.log(uri);
    })
    .fail(function() {
        alert("error");
    });
});

function getMeme(){
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        var memeUrl = data.data.memes;
        var theMeme = memeUrl[Math.floor(Math.random() * 100)];
        var getRandomMeme = theMeme.url;
        var theMemeName = theMeme.name;

        console.log(theMeme.url);
         //console.log(data);
        for(var i = 0; i < memeUrl.length; i++){
        $('#memeImage').append(
           
                '<div class="row">' +
                    '<div class="col-md-6">'+
                    '<div class="card" style="width: 18rem;">'+
                      
                        '<img src="' + memeUrl[i].url + '" class="card-img-top" alt="' + memeUrl[i].name +'"></img>' +
                            '<div class="card-body">' +
                            '<h5 class="card-title">' + memeUrl[i].name +'</h5>' +
                            '<ul class="list-group list-group-flush">'+
                            '<li class="list-group-item"><a href="' + memeUrl[i].url + '" class="btn btn-primary">Download</a></li>'+
                            '<li class="list-group-item"><a href="' + memeUrl[i].url + '" class="btn btn-danger">Delen</a></li>'+
                            '</ul>'+
                        '</div>' +
                        '</div>' +
                     '</div>' +
                
            '</div>' 
        )
        }
    })
}

getMeme();









