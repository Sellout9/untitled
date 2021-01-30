//locations
let runLocations = [[]];
runLocations[0][1] = function (){
    document.getElementById('msg').innerHTML = "something was here...";
    msg.style.color = "red";
  }
runLocations[0][4] = function (){
  document.getElementById('msg').innerHTML = "you are outside of a small town";
  msg.style.color = "gray";  
}
 


//interaction locations
let actionsLocations = [[]];
actionsLocations[0][1]= function (){
  if (document.getElementById("cmd").value == 'search'){
    document.getElementById('msg').innerHTML = "you found 31 copper pieces";
    msg.style.color = "blue";
    copper += 31;
  }
}
// finding trap door
actionsLocations[0][3]= function (){
  if (document.getElementById("cmd").value == 'search'){
    document.getElementById('msg').innerHTML = "you see a small trapdoor";
    msg.style.color = "red";
    trapdoorFound = true;
  }
  // entering trapdoor
  if (document.getElementById("cmd").value == 'enter'){
    if(trapdoorFound == true){
      document.getElementById('msg').innerHTML = "you enter the trap door...a ghoulish figure jolts towards you ";
      msg.style.color = "red";
      eLevel = 1;
      ghoul(1);
    }
    else
    {
      document.getElementById('msg').innerHTML = "what are you trying to enter?";
    }
  } 
}
