//variables 

//Main time is used to compare our app to any other timezone.
const mainTime = luxon.DateTime.local().setZone("America/Chicago").toFormat("HH:mm");
const timeNow = luxon.DateTime.local().toFormat("hh:mm a");

let imgAuthEl = document.getElementById("img-auth");
var loadPageBtn = $("#loadpage");

let timeAdjust;





var userList = [];

function init() {
    if (localStorage.getItem('userList')) {
        userList = JSON.parse(localStorage.getItem("userList"))
    }
}


init()

//saves the info the user shares. its added to local storage (info.html)
function save() {

    var Email = document.getElementById("email").value;
    var usernames = document.getElementById("username").value;
    var names = document.getElementById("name").value;
    var langauges = document.getElementById("language").value;
    var Platforms = document.getElementById("platform").value;
    var Topic = document.getElementById("topic").value;
    var user = {
        email: Email,
        usernames: usernames,
        name: names,
        langauge: langauges,
        platform: Platforms,
        topic: Topic
    }

    userList.push(user)
    localStorage.setItem("userList", JSON.stringify(userList));


}

// loads the users on the select partner page. 

$('#load-users').on("click", function () {


    var mainCont = $(".maincontainer")
    var x = JSON.parse(localStorage.getItem('userList'));

    let addTime = JSON.parse(localStorage.getItem("userList"));
    let centralTime = luxon.DateTime.local().setZone("America/Chicago").toFormat("HH")
    let pacificTime = luxon.DateTime.local().setZone("America/Los_Angeles").toFormat("HH")
    let easternTime = luxon.DateTime.local().setZone("America/New_York").toFormat("HH")
    let selectedTime = pacificTime
    let timeSum = centralTime - selectedTime
    timeAdjust = 0;



    // this is how the time differnce is calculated 
    if (timeSum === -1 || timeSum === 23) {
        timeAdjust = 1
    } else if (timeSum === 2) {
        timeAdjust = -2
    }

    // add each users info to the selectpartner.html
    for (let i = 0; i < x.length; i++) {
        var container = $("<div class = 'container col-3'>")
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

        var emailRow = $("<div class = 'row'>")
        emailRow.text("Email Address : " + x[i].email)


        let freeTime = [];
        for (const key in addTime[i]) {
            if (addTime[i][key] === true) {




                switch (key) {
                    case "m-7":
                        let m7 = 7 + timeAdjust;
                        freeTime.push(" Monday " + m7 + "am")

                        break;
                    case "m-8":
                        let m8 = 8 + timeAdjust;
                        freeTime.push(" Monday " + m8 + "am")

                        break;
                    case "m-9":
                        let m9 = 9 + timeAdjust;
                        freeTime.push(" Monday " + m9 + "am")
                        break;
                    case "m-10":
                        let m10 = 10 + timeAdjust;
                        freeTime.push(" Monday " + m10 + "am")
                        break;
                    case "t-7":
                        let t7 = 7 + timeAdjust;
                        freeTime.push(" Tuesday " + t7 + "am")
                        break;
                    case "t-8":
                        let t8 = 8 + timeAdjust;
                        freeTime.push(" Tuesday " + t8 + "am")
                        break;
                    case "t-9":
                        let t9 = 9 + timeAdjust;
                        freeTime.push(" Tuesday " + t9 + "am")
                        break;
                    case "t-10":
                        let t10 = 10 + timeAdjust;
                        freeTime.push(" Tuesday " + t10 + "am")
                        break;


                    case "w-7":
                        let w7 = 7 + timeAdjust;
                        freeTime.push(" Wednesday " + w7 + "am")
                        break;
                    case "w-8":
                        let w8 = 8 + timeAdjust;
                        freeTime.push(" Wednesday " + w8 + "am")
                        break;
                    case "w-9":
                        let w9 = 9 + timeAdjust;
                        freeTime.push(" Wednesday " + w9 + "am")
                        break;
                    case "w-10":
                        let w10 = 10 + timeAdjust;
                        freeTime.push(" Wednesday " + w10 + "am")
                        break;


                    case "th-7":
                        let th7 = 7 + timeAdjust;
                        freeTime.push(" Thursday " + th7 + "am")
                        break;
                    case "th-8":
                        let th8 = 8 + timeAdjust;
                        freeTime.push(" Thursday " + th8 + "am")
                        break;
                    case "th-9":
                        let th9 = 9 + timeAdjust;
                        freeTime.push(" Thursday " + th9 + "am")
                        break;
                    case "th-10":
                        let th10 = 10 + timeAdjust;
                        freeTime.push(" Thursday " + th10 + "am")
                        break;


                    case "f-7":
                        let f7 = 7 + timeAdjust;
                        freeTime.push(" Friday " + f7 + "am, ")
                        break;
                    case "f-8":
                        let f8 = 8 + timeAdjust;
                        freeTime.push(" Friday " + f8 + "am")
                        break;
                    case "f-9":
                        let f9 = 9 + timeAdjust;
                        freeTime.push(" Friday " + f9 + "am")
                        break;
                    case "f-10":
                        let f10 = 10 + timeAdjust;
                        freeTime.push(" Friday " + f10 + "am")
                        break;


                    case "s-7":
                        let s7 = 7 + timeAdjust;
                        freeTime.push(" Saturday " + s7 + "am")
                        break;
                    case "s-8":
                        let s8 = 8 + timeAdjust;
                        freeTime.push(" Saturday " + s8 + "am")
                        break;
                    case "s-9":
                        let s9 = 9 + timeAdjust;
                        freeTime.push(" Saturday " + s9 + "am")
                        break;
                    case "s-10":
                        let s10 = 10 + timeAdjust;
                        freeTime.push(" Saturday " + s10 + "am")
                        break;

                    case "su-7":
                        let su7 = 7 + timeAdjust;
                        freeTime.push(" Sunday " + su7 + "am")
                        break;
                    case "su-8":
                        let su8 = 8 + timeAdjust;
                        freeTime.push(" Sunday " + su8 + "am")
                        break;
                    case "su-9":
                        let su9 = 9 + timeAdjust;
                        freeTime.push(" Sunday " + su9 + "am")
                        break;
                    case "su-10":
                        let su10 = 10 + timeAdjust;
                        freeTime.push(" Sunday " + su10 + "am")
                        break;

                    default:
                        break;
                }


            }
        }

        var timeRow = $("<div class = 'row'>")
        timeRow.text("Time Avalible : " + freeTime)
        
        container.append(userRow);
        container.append(topicRow);
        container.append(platRow);
        container.append(langRow);
        container.append(emailRow);
        container.append(timeRow);
        mainCont.append(container);
    }
}
)

var saveBtn = document.querySelector(".submit");
if (saveBtn) {
    saveBtn.addEventListener("click", save);
}


//When the user clicks on a time slot. it turns the box green and saves it to local storage
$(".classes--QD1OT").on("click", function (event) {
    event.preventDefault()
    var timeslot = $(this).attr("data-timeslot")
    var changeGreen = $(this).addClass("nowgreen")

    console.log("click", timeslot);
    var localUserList = JSON.parse(localStorage.getItem("userList"));
    var lastUserPosition = localUserList.length - 1;
    console.log(lastUserPosition);

    localUserList[lastUserPosition][timeslot] = true;



    localStorage.setItem("userList", JSON.stringify(localUserList))
})



//Luxon Time - use below for reference 
// let centralTime = luxon.DateTime.local().setZone("America/Chicago").toFormat("hh:mm a")
// let pacificTime = luxon.DateTime.local().setZone("America/Los_Angeles").toFormat("hh:mm a")
// let easternTime = luxon.DateTime.local().setZone("America/New_York").toFormat("hh:mm a")
//format for 24h time
luxon.DateTime.local().toFormat("HH:mm ");
//format for am/pm
luxon.DateTime.local().toFormat("hh:mm a")

//adding time to the sc.html h1 tag
$("#current-time").text(timeNow)
//Set time to local storage
localStorage.setItem("maintime", mainTime)

let timeZoneEl = $('#time-zone').val


