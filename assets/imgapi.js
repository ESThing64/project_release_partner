let backgroundUrl = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=meditation"



fetch(backgroundUrl)
    .then(function(response) {
        return response.json()
            .then(function(data) {
                console.log(data)
                console.log(data.urls.full)


                document.body.style.backgroundImage = `url(${data.urls.full})`
                

            })
    })
    

    