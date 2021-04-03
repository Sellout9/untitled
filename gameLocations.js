//locations

runLocations[0][1] = function (){
    document.getElementById('msg').innerHTML = "something was here...";
    msg.style.color = "red";
  }
runLocations[3][0] = function (){
  document.getElementById('msg').innerHTML = "you are outside of a small town";
  msg.style.color = "gray";
}
runLocations[2][1] = function (){
  document.getElementById('msg').innerHTML = "a large tree stands in front of you.";
  msg.style.color = "black";
}


//interaction locations

actionsLocations[2][1]= function (){
  if (document.getElementById("cmd").value == 'chop'){
    document.getElementById('msg').innerHTML = "the tree fights back dealing 3 damage";
    document.getElementById('x').innerHTML = `you have ${health} health, maybe you don't wanna chop this tree...`;
    health -= 3; 
    msg.style.color = "gray";
    inTown = true;
  }
  if (document.getElementById("cmd").value == 'search'){
    document.getElementById('msg').innerHTML = "a carving in the tree reads - h tigeysrskatetnrh i";
  }
  if (document.getElementById("cmd").value == 'shake'){
    shakeTree();
  }
  }
actionsLocations[3][0]= function (){
  if (document.getElementById("cmd").value == 'enter'){
    document.getElementById('msg').innerHTML = "you enter the town";
    msg.style.color = "gray";
    inTown = true;
  }
    if (document.getElementById("cmd").value == 'buy'){
      if(inTown == true){
      document.getElementById('msg').innerHTML = "dagger 150 copper, apples for 5 copper each";
      document.getElementById('x').innerHTML = "you can buy dagger and apples here";
      msg.style.color = "gray";
      inTown = true;
      buyScreen = true;
      }
      if(inTown == false){
        document.getElementById('x').innerHTML = "there is nothing to buy here.";
      }
    }
      if (document.getElementById("cmd").value == 'exit'){
        inTown = false;
        buyScreen = false;
        document.getElementById('x').innerHTML = `you are now at ${pos[0]}, ${pos[1]}`;
        document.getElementById('msg').innerHTML = "you exit the town";
      }
      if (document.getElementById("cmd").value == 'apple'){
        if(buyScreen == true){
          if(copper >= 5){
          document.getElementById('x').innerHTML = `you purchased an apple, you have ${copper} copper.`;
            document.getElementById('msg').innerHTML = `(eat apple) to eat an apple.`;
            apples += 1;
            copper -= 5; 
          }
          }
      }
      if (document.getElementById("cmd").value == 'dagger'){
        if(buyScreen == true){
          if(copper >= 150 && dagger == false){
            dagger = true;
            copper -= 150;
            document.getElementById('x').innerHTML = `you purchased a dagger, you have ${copper} copper.`;
            document.getElementById('msg').innerHTML = "(equip dagger) to equip.";
          }
          if (copper <= 150){
            document.getElementById('msg').innerHTML = `you only have ${copper} copper you need 150.`;
          }
          if (dagger == true){
            document.getElementById('msg').innerHTML = `you already have a dagger.`;
          }
        }
      }
    }


// finding trap door
actionsLocations[0][3]= function (){
  if (document.getElementById("cmd").value == 'search'){
    document.getElementById('msg').innerHTML = "you see a small trapdoor";
    msg.style.color = "red";
    trapdoorFound = true;
  }
}
  actionsLocations[0][1]= function (){
    if (document.getElementById("cmd").value == 'search'){
      if (secret == false){
      document.getElementById('msg').innerHTML = "you find 31 copper";
      msg.style.color = "blue";
      copper += 31;
      secret = true;
      }
    }
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
