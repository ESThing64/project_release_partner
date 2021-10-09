


// I didnt use my own unsplah api key, because I dont have a backend to keep it private.
let backgroundUrl = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=meditation"



fetch(backgroundUrl)
    .then(function(response) {
        return response.json()
            .then(function(data) {
                


                document.body.style.backgroundImage = `url(${data.urls.full})`
                

            })
    })
    

    