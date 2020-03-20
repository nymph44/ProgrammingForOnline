var trainData;
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
                            
                            '<a href="' + memeUrl[i].url + '" class="btn btn-primary btn-block">Download</a>'+
                            
                            
                        '</div>' +
                        '</div>' +
                     '</div>' +
                
            '</div>' 
        )
        }
    })
}

getMeme();









