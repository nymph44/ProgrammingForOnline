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