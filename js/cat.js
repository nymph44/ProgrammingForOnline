
function getCatFact(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://cat-fact.herokuapp.com/facts';
    fetch(proxyUrl + targetUrl)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Deze API heeft 223 qoutes
        //in deze variabele roep ik een in willekeurige qoute uit de lijst   
        //console.log(data.all.length);
        var catUrl = data.all[Math.floor(Math.random() * 223)]; 
        for(var i = 0; i < 1; i++){
            //var randomQoute = catUrl[Math.floor(Math.random() * 100)];
        $('#getQoute').append(
           
            //  '<p id="qouteParagraph">' + catUrl.text + '</p><br>' +
            // '<p id="qouteParagraph">' + catUrl.user.name.first + " " + catUrl.user.name.last + '</p>'
            '<div class="card">' +
            '<blockquote class="blockquote text-center">' +
            '    <p class="mb-0">'+ catUrl.text + '</p>' +
            '    <footer class="blockquote-footer">'+ catUrl.user.name.first + " " + catUrl.user.name.last +'<cite '+ 'title="Source Title"></cite></footer> '+
            '    </blockquote>' +
            '</div>'
         )
         $('#qouteParagraph').fadeIn();
         }
      })
}


