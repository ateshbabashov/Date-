window.addEventListener("load", myOclock=()=>{    // addvenlistenerle olan her sey colback function sayilirs load iventdir 
let time = new Date();   ///

let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

hour = hour < 10 ? "0" + hour:hour; //ifler islenir if ? isaresdi elsede : dedir
minute = minute < 10 ? "0" + minute:minute; // eger 10 nan kicikdirse qabaglarinda sifir islenecek yoxsa ele saatin ozu olacag
second = second < 10 ? "0" + second:second;


let day = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();

day = day < 10 ? "0" + day:day; //ifler islenir if ? isaresdi elsede : dedir
month = month < 10 ? "0" + (month + 1):month; // eger 10 nan kicikdirse qabaglarinda sifir islenecek yoxsa ele saatin ozu olacag
year = year < 10 ? "0" + year:year;


    document.getElementById("hour").innerHTML = hour + ":";
    document.getElementById("minute").innerHTML = minute + ":";
    document.getElementById("second").innerHTML = second;

    let interval = setInterval(myOclock , 1000); //interval vasitesiyle 1 saniyeden bir vaxt isleyecek

    document.querySelector(".date").innerHTML = day + "/" + month + "/" + year;
    /// aylari ve ginleri duzeldirik
});
