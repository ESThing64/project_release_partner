var Hour = luxon.DateTime;
var Naur = document.querySelector(".naur")
​
// test 1 and 1,001(In progress) - gives the hour out of 24 in both timezones
​
// var Amer = Hour.now().setZone('America/New_York').hour;
// console.log(Amer);
​
// var TK = Hour.now().setZone('Asia/Tokyo').hour;
// console.log(TK);
​
// test 1,001(fail) - prints out 18 when Tokyo Tk log says 12
​
// const date = new Date(TK);
// const [hour] = [date.getHours()];
// console.log(date)
// console.log(hour)
​
​
​
//test 2 (fail) - spits out an array with objects
​
// var now = Hour.local();
// var wow = Hour.now();
// console.log(now);
// console.log(wow);
​
​
//test 3,7, & 8 - (in progress)
​
// const timeNow = luxon.DateTime.local()
//(fail)test 7 with DayTime.TIME_SIMPLE inside tolocaleString and 8 with .TIME_SIMPLE on oustide of tolocalestring()
​
// var AT = timeNow.setZone('Asia/Tokyo').toLocaleString();
// console.log(AT);
​
//test 3 (works)- gives date in wrong format
​
// var as = timeNow.setZone('Asia/Tokyo').toLocaleString();
// console.log(as)
​
​
//test 4(in-progress) - gives date and time but well function will not change the new object
​
 var dateTime = Hour.local();
 var currentdate = dateTime.toISO();
​
var timeZone = "America/Los_Angeles";
 const dateObject = new Date(currentdate).toLocaleString( {
   timeZone,
 });
​
//test 5 addon to 4 - well function does not change the date object
// function well(){
//     timeZone = "Asia/Tokyo";
//     console.log( dateObject);
// }
// Naur.addEventListener("click", well)
​
// console.log(dateObject);
​
​
​
//test 6 (fail) - not in right format, doesn't change AT after Naur is clicked
​
// var timeZone = 'Asia/Tokyo';
// const timeNow = luxon.DateTime.local({ zone: timeZone })
// var AT = timeNow.toLocaleString("en-US",{ timeZone,});
// console.log(AT);
​
// function TZS(){
//     timeZone = 'America/Los_Angeles'
// }
​
// Naur.addEventListener("click", TZS);
​
​
​
// var AT = Hour.setZone('Asia/Tokyo').toLocaleString(DateTime.TIME_SIMPLE);
// console.log(AT);
​
​
​
//test 8 (fail)
​
// dt = luxon.DateTime;
// var woah = dt.toLocaleString();
// console.log(woah);
​
// dt.toLocaleString(DateTime.DATETIME_FULL);
​
//test 1,000 (fail)
​
// var dt = Luxon.DateTime;
// console.log(dt);