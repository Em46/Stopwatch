// ---- Stopwatch:
const stopwatch = document.getElementById("stopwatch");
stopwatch.innerHTML = "00:00:00";

// ---- Start button:
const start = document.getElementById("start");
const start_stpw = start.addEventListener('click', stpw_start);


function stpw_start() {
    //Preventing multiple clicks on the Start button from breaking the stopwatch:
    start.disabled = true;

    //Declaring stopwatch start time:
    var initial = 1;

    if (stopwatch.innerHTML != "00:00:00")
    {
        initial = incremented_value
    }

    //Function to convert seconds into hours, mins and seconds:
    function hrs_mins_secs() {  

        //Declaring variables:
        var hrs = ~~((initial/3600));
        var mins = ~~((initial-(hrs*3600))/60)
        var secs = ~~(initial-(hrs*3600+mins*60))

        //Adjusting format of hrs, mins and secs if they are under value of 10:
            if(hrs < 10) {
               hrs = "0" + hrs
            }

            if(mins < 10) {
              mins = "0" + mins
            }
 
            if(secs < 10) {
                secs = "0" + secs  
            }
        
        //Incrementing the initial variable by 1:
        incremented_value = initial += 1;

        //Using the variables in the stopwatch formatting:
        stopwatch.innerHTML = hrs + ":" + mins + ":" + secs;
    }

    //Repeating the function every second to enable increment every second:
    interval = setInterval(hrs_mins_secs, 1000)
}

// ---- Stop button:
const stp = document.getElementById("stop");
const stp_stpw = stp.addEventListener('click', stop);

function stop() {
    clearInterval(interval);
    initial = stopwatch.innerHTML;
    start.disabled=false;
}

// ---- Reset button:
const rst = document.getElementById("reset");
const rst_stpw = rst.addEventListener('click',reset);

function reset() {
    clearInterval(interval);
    stopwatch.innerHTML = "00:00:00";
    start.disabled=false;
}

// ---- Displaying the current time:
function time() {
    const time = new Date();
    document.getElementById("time").innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
}
setInterval(time,100);