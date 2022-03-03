let pos = [0, 0];
     let copper = 0;
     let inTown = false;
     let health = 10;
     let pAttack = 2;
     let trapdoorFound = false;
     let inCombat = false;
     let eAttack = 0;
     let eHitChance = 0;
     let eHealth = 0;
     let enemy = "";
     let hitChance = 5;
     let weapon = "bare hands";
     let hit = false;
     let eHit = false;
     let roll = 0;
     let out3 = "";
     let eLevel;
     let gameOver = false;
     let actionsLocations = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
     let runLocations = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
     let allActions = {};
     buyScreen = false;
     sellScreen = false;
     let apples = 0;
     let dagger = false;
     let secret = false;
     let shakenTree = 0;
     let treeFallen = false;
     let crystalSeeds = 0;
     let sticks = 0;
     let strangeSword = false;
     let strangeSwordEquip = false;
     let souls = 0;
     let wood = 0;
     var out2;
const responses = new Map([
    ['north', [ 0, 1]],
    ['south', [ 0,  -1]],
    ['east',  [ 1,  0]],
    ['west',  [-1,  0]],
  ]);
  allActions["inv"] = function() {
    if (gameOver == true){
      out3 = "the game is over."
      document.getElementById('msg').innerHTML = out3;
    }
    else
    {
    out2 = `you have ${copper} copper pieces and ${apples} apples.`;
    out2 = `you have ${copper} copper pieces, ${apples} apples, ${sticks} sticks, ${wood} wood.`;
      document.getElementById('msg').innerHTML = out2;
      msg.style.color = "black";
    }
  }
  allActions["equip dagger"] = function() {
    out2 = `you equip the dagger.`;
      document.getElementById('msg').innerHTML = out2;
      pAttack = 4;
      hitChance = 5;
  }
  allActions["equip strange sword"] = function() {
    out2 = `you equip the strange sword.`;
      document.getElementById('msg').innerHTML = out2;
      pAttack = 4;
      hitChance = 4;
  }
  allActions["health"] = function() {
    out2 = `you have ${health} health.`;
      document.getElementById('msg').innerHTML = out2;
      msg.style.color = "black";
  }
  allActions["attack"] = function() {
    if (gameOver == true){
      out3 = "the game is over."
      document.getElementById('msg').innerHTML = out3;
    }
      if (inCombat == true){
        roll = Math.floor(Math.random() * 10);
          if (roll >= hitChance){
            hit = true;
          }
          else {
            hit = false;
          }
        roll = Math.floor(Math.random() * 10);
          if(roll >= eHitChance){
            eHit = true;
          }
          else{
            eHit = false;
          }
          if (eHit == true && hit == true)
          {
            eHealth -= pAttack;
            health -= eAttack;
            out3 = `you hit the enemy ${enemy} with your ${weapon} for ${pAttack} damage. the enemy ${enemy} strikes you back for ${eAttack} damage.`
            if (health <= 0){
              playerDead()
            }
            if (eHealth <= 0){
              enemyDead()
            }
          }
          if (eHit == false && hit == true)
          {
            eHealth -= pAttack
            out3 = `you hit the enemy ${enemy} with your ${weapon} for ${pAttack} damage. the enemy ${enemy} fails to hit you`
            if (health <= 0){
              playerDead()
            }
            if (eHealth <= 0){
              enemyDead()
            }
          }
          if (eHit == true && hit == false)
          {
            health -= eAttack;
            out3 = `you fail to hit the enemy ${enemy}. the enemy ${enemy} strikes you for ${eAttack} damage.`
            if (health <= 0){
              playerDead()
            }
            if (eHealth <= 0){
              enemyDead()
            }
          }
          if (eHit == false && hit == false)
          {
            out3 = `you fail to hit the enemy ${enemy}. the enemy ${enemy} fails to hit you as well`
            if (health <= 0){
              playerDead()
            }
            if (eHealth <= 0){
              enemyDead()
            }
          }
        document.getElementById('msg').innerHTML = out3;
        msg.style.color = "red";
        const out4 = `you have ${health} health. the ${enemy} has ${eHealth} health.`;
      document.getElementById('combat').innerHTML = out4;
      }
  }
  
  
  
  
  
  function run() {
  
    if (gameOver == true){
      out3 = "the game is over."
      document.getElementById('msg').innerHTML = out3;
    }
    if (inTown == true){
      out3 = "exit the town first."
      document.getElementById('x').innerHTML = out3;
      inTown = false;
        buyScreen = false;
        document.getElementById('x').innerHTML = `you are now at ${pos[0]}, ${pos[1]}`;
        document.getElementById('msg').innerHTML = "you exit the town";
    }
    else {
    const x = document.getElementById("input").value;
    const movement = responses.has(x) ? responses.get(x) : [0, 0];
    pos[0] += movement[0];
    pos[1] += movement[1];
    
    const out = `you are now at ${pos[0]}, ${pos[1]}`;
    document.getElementById('x').innerHTML = out;
    
  if (pos[0] < runLocations.length)
    
    if (Array.isArray(runLocations[pos[0]]) && pos[1] < runLocations[pos[0]].length)
      {
        if(runLocations[pos[0]][pos[1]] != undefined){
            (runLocations[pos[0]][pos[1]])();  
                }
      }
    }
}
    
  function action(cmd) {
    if (gameOver == true){
      out3 = "the game is over."
      document.getElementById('msg').innerHTML = out3;
    }
    else {
    const a = document.getElementById("cmd").value;
    
    if(allActions[a] != undefined)
    {
      (allActions[a])();
    }
    
    let row = actionsLocations[pos[0]];
    if (row && row[pos[1]]) {
        (actionsLocations[pos[0]][pos[1]])();
    }
    
  
  }     
  }
  function playerDead(){
    out3 = `you died. game over.`
    document.getElementById('msg').innerHTML = out3;
    gameOver = true;
  
  }
  function enemyDead(){
    if (gameOver == false){
      inCombat = false;
    if (enemy == "ghoul"){
      droppedCopper = eLevel *= 5;
      copper += droppedCopper;
      out3 = `the ghoul dies and drops ${droppedCopper} copper pieces.`
      document.getElementById('msg').innerHTML = out3;
      droppedCopper = 0;
      eLevel = 0;
    }
    if (strangeSwordEquip == true){
      souls += 1;
    }
  }
  }
  function ghoul(level) {
    enemy = "ghoul";
    inCombat = true;
    eHealth = (level * 7);
    eAttack = (level * 2)
    eHitChance = 4;
  }
  function shakeTree(){
    if (shakeTree >= 357){
      treeFallen = true;
      out3 = "the tree has fallen you pick up 4 pieces of wood"
      wood += 4;
    }
    if (treeFallen == false){
      shakenTree += 1;
      roll = Math.floor(Math.random() * 500);
      if (roll >= 14 && roll <= 17){
        out3 = "a strange sword with odd writing falls from the tree and into your bag."
        strangeSword = true;
      }
      if (roll >= 0 && roll <= 13){
        out3 = "you find some strange seeds."
        crystalSeeds + 1;
      }
      if (roll >= 18 && roll <= 50){
        out3 = "an apple drops from the tree."
        apples + 1;
      }
      if (roll >= 51 && roll <= 250){
        out3 = "a stick falls from the tree."
        sticks + 1;
      }
      if (roll >= 250 && roll <= 500){
        out3 = "nothing happens."
      }
      }
    if (treeFallen == true){
      out3 = "the tree is fallen."
    }
    document.getElementById('x').innerHTML = out3;
  }
