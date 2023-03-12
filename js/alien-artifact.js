// alert("here")

$(function(){

    // set variables
    const answers = [0,0,0];
    
    let freqMsg = "analyzing";
    let greetMsg = "analyzing";
    let dateMsg = "analyzing";
    
    
    // is button clicked?
    $("button").on("click", function(){
        
        // is frequency correct
        let freq = $("#frequency").val();
        if (freq == "5735") {
            freqMsg = "frequency is CORRECT"
            freqColor = "green"
            answers[0]=1;
        }
        else {
            freqMsg = "frequency is INCORRECT"
            freqColor = "red"
            answers[0]=0;
        }


        //is greeting correct
        if ($("#greeting1").val() =='m' && $("#greeting2").val() =='a' && $("#greeting3").val() =='g' && $("#greeting4").val() =='i' ) {

                greetMsg = "universal greeting is CORRECT"
                greetColor = "green"
                answers[1]=1;
        }
        else {
            greetMsg = "universal greeting is INCORRECT"
            greetColor = "red"
            answers[1]=0;
        }

        //is date correct
        if ($("#month-picker").val() =='7' && $("#day-picker").val() =='27' && $("#year-picker").val() =='2033') {
        
            dateMsg = "launch date is CORRECT"
            dateColor = "green"
            answers[2]=1;
        }
        else {
            dateMsg = "launch date is INCORRECT"
            dateColor = "red"
            answers[2]=0;
        }




        $("#freqAlert").css("backgroundColor",freqColor).text(freqMsg)
        $("#greetAlert").css("backgroundColor",greetColor).text(greetMsg)
        $("#dateAlert").css("backgroundColor",dateColor).text(dateMsg)
        



            // short timer  

            // if win -> win page
            if (answers[0] && answers[1] && answers[2]) {
                setTimeout(()=> window.location = "win.html", 1000);
                
            } else {
                //else -> reset all 
                setTimeout(()=> reset(), 4000);
            }


            

           
        })


function reset(){
    window.location = "index.html";
}
        

})