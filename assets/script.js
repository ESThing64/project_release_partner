let backgroundUrl = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=meditation"
let imgAuthEl = document.getElementById("img-auth")
fetch(backgroundUrl)
    .then(function(response) {
        console.log(response)
        return response.json()
            .then(function(data) {

                document.body.style.backgroundImage = `url(${data.urls.full})`
                imgAuthEl.textContent = "By: " + data.user.name

            })
    })
    .catch(function() {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
    })

//save user start
    
    // var username = document.querySelector("");
    // var name = document.querySelector("");
    // var langauge = document.querySelector("");
    // var platform = document.querySelector("");
    // var timezones = document.querySelector(""); 
    // var topic = document.querySelector("");


    function save(){
        var Email = document.getElementById("email").value;
         localStorage.setItem("email1", Email)
         var usernames = document.getElementById("username").value;
         localStorage.setItem("username1", usernames)
         var names = document.getElementById("name").value;
         localStorage.setItem("names1", names)
         var langauges = document.getElementById("language").value;
         localStorage.setItem("languages1", langauges)
         var Platforms = document.getElementById("platform").value;
         localStorage.setItem("plats1", Platforms)
         var timezones = document.getElementById("timezone").value;
         localStorage.setItem("timezones1", timezones)
         var Topic = document.getElementById("topic").value;
         localStorage.setItem("Topic1", Topic)
     
    }
    function get(){
    }

    var saveBtn = document.querySelector(".submit");
    saveBtn.addEventListener("click", save);

    //save user end