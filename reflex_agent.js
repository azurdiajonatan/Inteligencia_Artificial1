function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

async function test(states){
    var count = 0;
    var s1,s2,s3,s4,s5,s6,s7,s8 = false;
    while (true){

        var location = states[0];
        var number = Math.floor(Math.random()*101);		
        var state = states[0] == "A" ? states[1] : states[2];
        var action_result = reflex_agent(location, state);
        if(location == "A" && states[1] == "DIRTY" && states[2] == "DIRTY"){
         if(s1 == true){
            document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
            //console.log("location: "+ location + " | action: " + action_result);
         }else{ 
            document.getElementById("log").innerHTML+="<br> STATE 1 -> LOCATION [A,DIRTY,DIRTY] ";
            //console.log('STATE 1 -> LOCATION [A,DIRTY,DIRTY]');
            s1 = true;
            count++;
         }
         
        }else if(location == "A" && states[1] == "CLEAN" && states[2] == "DIRTY"){
         if(s2){
            document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
            //console.log("location: "+ location + " | action: " + action_result);
         }else{
            document.getElementById("log").innerHTML+="<br> STATE 2 -> LOCATION [A,CLEAN,DIRTY]";
            //console.log('STATE 2 -> LOCATION [A,CLEAN,DIRTY]');
            s2 = true;
            count++;
         }
         
        }else if(location == "B" && states[1] == "CLEAN" && states[2] == "DIRTY"){
            if(s3){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
             }else{
                document.getElementById("log").innerHTML+="<br> STATE 3 -> LOCATION [B,CLEAN,DIRTY] ";
                //console.log('STATE 3 -> LOCATION [B,CLEAN,DIRTY]');
                s3 = true;
                count++;
             }
         
        }else if(location == "B" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            if(s4){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
            }else{
                document.getElementById("log").innerHTML+="<br> STATE 4 -> LOCATION [B,CLEAN,CLEAN] " ;
                //console.log('STATE 4 -> LOCATION [B,CLEAN,CLEAN]');
                s4 = true;
                count++;
            }
         
        }else if(location == "B" && states[1] == "DIRTY" && states[2] == "DIRTY"){
            if(s5){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
            }else{
                document.getElementById("log").innerHTML+="<br> STATE 5 -> LOCATION [B,DIRTY,DIRTY]";
                //console.log('STATE 5 -> LOCATION [B,DIRTY,DIRTY]');
                s5 = true;
                count++;
            }
         
        }else if(location == "B" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            if(s6){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
            }else{
                document.getElementById("log").innerHTML+="<br> STATE 6 -> LOCATION [B,DIRTY,CLEAN] ";
                //console.log('STATE 6 -> LOCATION [B,DIRTY,CLEAN]');
                s6 = true;
                count++;
            }
         
        }else if(location == "A" && states[1] == "DIRTY" && states[2] == "CLEAN"){
            if(s7){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
            }else{
                document.getElementById("log").innerHTML+="<br> STATE 7 -> LOCATION [A,DIRTY,CLEAN] ";
                //console.log('STATE 7 -> LOCATION [A,DIRTY,CLEAN]');
                s7 = true;
                count++;
            }
         
        }else if(location == "A" && states[1] == "CLEAN" && states[2] == "CLEAN"){
            if(s8){
                document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
                //console.log("location: "+ location + " | action: " + action_result);
            }else{
                document.getElementById("log").innerHTML+="<br> STATE 8 -> LOCATION [A,CLEAN,CLEAN]";
                //console.log('STATE 8 -> LOCATION [A,CLEAN,CLEAN]');
                s8 = true
                count++
            }
        }
        
        if(count == 8){
            document.getElementById("log").innerHTML+="<br> RECORRIO LOS 8 ESTADOS!";
            console.log('RECORRIO LOS 8 ESTADOS!')
            return;
        }

        //document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
        if (action_result == "CLEAN"){
          if (location == "A") states[1] = "CLEAN";
           else if (location == "B") states[2] = "CLEAN";
        }
        else if (action_result == "RIGHT") states[0] = "B";
        else if (action_result == "LEFT") states[0] = "A";	
        
        if(number > 70){
         states[1] = "DIRTY";
         states[2] = "DIRTY";
        }
        
        await new Promise(r => setTimeout(r, 2500));
    }
}

var states = ["A","DIRTY","DIRTY"];
test(states);