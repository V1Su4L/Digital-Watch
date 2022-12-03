setInterval(showTime, 1000);
function showTime()
{
    let time = new Date();
    day = time.getDate(); //Getting the day on the month (1-31)
    month = time.getMonth(); //Getting the month of the year (1-12)
    FullYear = time.getFullYear(); //Getting the Year.
    hour = time.getHours();
    minute = time.getMinutes();
    seconds = time.getSeconds(); 
    document.getElementById("clock").innerHTML = time;
}