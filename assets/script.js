//variables 

//Main time is used to compare our app to any other timezone.
const mainTime = luxon.DateTime.local().setZone("America/Chicago").toFormat("HH:mm");
const timeNow = luxon.DateTime.local().toFormat("hh:mm a");
let backgroundUrl = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=meditation";
let imgAuthEl = document.getElementById("img-auth");
var loadPageBtn = $("#loadpage");
console.log("mainTime:", mainTime);
console.log("timeNow:", timeNow);


//Back ground api fetch- blocked it until we have a plan for styling
// fetch(backgroundUrl)
//     .then(function(response) {
//         console.log(response)
//         return response.json()
//             .then(function(data) {

//                 document.body.style.backgroundImage = `url(${data.urls.full})`
//                 imgAuthEl.textContent = "By: " + data.user.name

//             })
//     })
//     .catch(function() {
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
//     })
// var username = document.querySelector("");
// var name = document.querySelector("");
// var langauge = document.querySelector("");
// var platform = document.querySelector("");
// var timezones = document.querySelector(""); 
// var topic = document.querySelector("");

var userList = [];

function save() {
    var Email = document.getElementById("email").value;

    var usernames = document.getElementById("username").value;

    var names = document.getElementById("name").value;

    var langauges = document.getElementById("language").value;

    var Platforms = document.getElementById("platform").value;

    var timezones = document.getElementById("timezone").value;
    console.log("timezone", timezones);
    var Topic = document.getElementById("topic").value;

    var user = {
        email: Email,
        usernames: usernames,
        name: names,
        langauge: langauges,
        platform: Platforms,
        timezone: timezones,
        topic: Topic
    }

    userList.push(user)
    localStorage.setItem("userList", JSON.stringify(userList));
    console.log(localStorage);

}

$('#load-users').on("click", function(){

var selectusername = $(".user");
    var test = $("#test")
    var mainCont = $(".maincontainer")

    var x = JSON.parse(localStorage.getItem('userList'));

    for (let i = 0; i < x.length; i++) {
        var container = $("<div class = 'container col-3'>")
        // for (let j = 0; j < 5; j++) {
        var userRow = $("<div class = 'row'>")
        userRow.text("username : " + x[i].usernames)

        var langRow = $("<div class = 'row'>")
        langRow.text("Langauge : " + x[i].langauge)

        var platRow = $("<div class = 'row'>")
        platRow.text("Platform : " + x[i].platform)

        var topicRow = $("<div class = 'row'>")
        topicRow.text("Topic : " + x[i].topic)

        var userRow = $("<div class = 'row'>")
        userRow.text("username : " + x[i].usernames)
        // }
        container.append(platRow);
        container.append(topicRow);
        container.append(userRow);
        container.append(langRow);
        mainCont.append(container)

    }
    let addTime = JSON.parse(localStorage.getItem("userList"));


    for (const key in addTime[0]) {
        if (addTime[0][key] === true) {
            console.log("this the add itemkey", addTime[0][key])
            console.log(key)

            switch (key) {
                case "m-7":
                    console.log("saturday 10am")
                    break;
                case "m-8":
                    console.log("saturday 10am")
                    break;
                case "m-9":
                    console.log("saturday 10am")
                    break;
                case "m-10":
                    console.log("saturday 10am")
                    break;
                case "t-7":
                    console.log("saturday 10am")
                    break;
                case "t-8":
                    console.log("saturday 10am")
                    break;
                case "t-9":
                    console.log("saturday 10am")
                    break;
                case "t-10":
                    console.log("saturday 10am")
                    break;
                case "w-7":
                    console.log("saturday 10am")
                    break;
                case "w-8":
                    console.log("saturday 10am")
                    break;
                case "w-9":
                    console.log("saturday 10am")
                    break;
                case "w-10":
                    console.log("saturday 10am")
                    break;
                case "th-7":
                    console.log("saturday 10am")
                    break;
                case "th-8":
                    console.log("saturday 10am")
                    break;
                case "th-9":
                    console.log("saturday 10am")
                    break;
                case "th-10":
                    console.log("saturday 10am")
                    break;
                case "f-7":
                    console.log("saturday 10am")
                    break;
                case "f-8":
                    console.log("saturday 10am")
                    break;
                case "f-9":
                    console.log("saturday 10am")
                    break;
                case "f-10":
                    console.log("saturday 10am")
                    break;
                case "s-7":
                    console.log("saturday 10am")
                    break;
                case "s-8":
                    console.log("saturday 10am")
                    break;
                case "s-9":
                    console.log("saturday 10am")
                    break;
                case "s-10":
                    console.log("saturday 10am")
                    break;
                case "su-7":
                    console.log("saturday 10am")
                    break;
                case "su-8":
                    console.log("saturday 10am")
                    break;
                case "su-9":
                    console.log("saturday 10am")
                    break;
                case "su-10":
                    console.log("saturday 10am")
                    break;

                default:
                    break;
            }

            // }
        }
    }
    // loadPageBtn.on("click", function (){

}

    
)


    
// console.log(x[0].usernames);
//     // (selectusername[0])

//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i].usernames)
//         console.log(selectusername);

//         // selectusername
//         // (selectusername[i]).text(x[i].usernames)
//         // console.log(selectusername[0]);
//         // (selectusername[i]).textContent= x[i].langauge
//         // (selectusername[i]).textContent= x[i].platform
//         // (selectusername[i]).textContent= x[i].timezone
//         // (selectusername[i]).textContent= x[i].topics
//     }
// }

//   )


var saveBtn = document.querySelector(".submit");
if (saveBtn) {
    saveBtn.addEventListener("click", save);
}



$(".classes--QD1OT").on("click", function () {
    var timeslot = $(this).attr("data-timeslot")
    var changeGreen = $(this).addClass("nowgreen")

    console.log("click", timeslot);
    var localUserList = JSON.parse(localStorage.getItem("userList"));
    var lastUserPosition = localUserList.length - 1;
    console.log(lastUserPosition);

    localUserList[lastUserPosition][timeslot] = true;



    localStorage.setItem("userList", JSON.stringify(localUserList))
})
//save user end


//Luxon Time - use below for reference 


//format for changing timezone
let centralTime = luxon.DateTime.local().setZone("America/Chicago").toFormat("hh:mm a")
let pacificTime = luxon.DateTime.local().setZone("America/Los_Angeles").toFormat("hh:mm a")
let easternTime = luxon.DateTime.local().setZone("America/New_York").toFormat("hh:mm a")

console.log("Pacific Time: ", pacificTime)
console.log("Central Time: ", centralTime)
console.log("Eastern Time", easternTime)
//format for 24h time
luxon.DateTime.local().toFormat("HH:mm ");
//format for am/pm
luxon.DateTime.local().toFormat("hh:mm a")

//adding time to the sc.html h1 tag
$("#current-time").text(timeNow)
//hello
localStorage.setItem("maintime", mainTime)

let timeZoneEl = $('#time-zone').val

console.log(timeZoneEl)


//loop over object find true val
//grab the key
//if m



// function save() {
//     var checkbox = document.querySelector('input[name=theme]');

// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     }, 1000)
// }
// }
