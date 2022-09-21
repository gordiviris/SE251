
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
        
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}



function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    
    /* this is where you'll generate the grid, for now I will just show first day of week */
    var str="";
    /*
    str += "<ul>"
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";
    str += "</ul>";
    */

    var count = 0;
    str+= `<div class="row">`
    for(let start = 0; start < firstDayOfWeek; start ++){
        count++;
        str += `<div class="empty"></div>`
        
    }
    for(let day=0; day < numberOfDaysInMonth; day++){
        count++
        str += `<div class="day">` + (day+1) + `</div>`;
        if(count % 7 == 0 ){
            str += `</div>`
            str += `<div class="row">`
            count = 0;
        }

        

    }
    str+= `</div>`
    
    
    $("#results").html(str);
    
    var boxes = document.getElementsByClassName("day");
    console.log(boxes)

    for(var x=0 ; x <boxes.length; x++){
        boxes[x].addEventListener('click', function onClick(e){
            console.log(e.target);
            if(e.target.style.backgroundColor == "green"){
                event.target.style.backgroundColor = "red";
            }
            else if(e.target.style.backgroundColor == "red"){
                event.target.style.backgroundColor = "white";
            }
            else{
                event.target.style.backgroundColor = "green";
            }
            
        })
    }

    var avail = document.querySelector("#yes");
    avail.addEventListener('click', function onClick(){
        console.log("all green");
        for (var x in boxes){
            boxes[x].style.backgroundColor = "green";
        }
        
    });
    var unavail = document.querySelector("#no");
    unavail.addEventListener('click', function onClick(){
        console.log("all green");
        for (var x in boxes){
            boxes[x].style.backgroundColor = "red";
        }
        
    });
    
}


