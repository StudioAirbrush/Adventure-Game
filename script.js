const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

function makeChoice(choice) {
  if (choice === "explore") {
    storyElement.textContent = "You venture deeper into the forest and hear strange noises. You find a path splitting into two. Which way will you go?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('left')">Take the left path</button>
      <button onclick="makeChoice('right')">Take the right path</button>
    `;
  } else if (choice === "stay") {
    storyElement.textContent = "You decide to stay put. As night falls, strange creatures approach. You can try to climb a tree or hide under some bushes.";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('climb')">Climb a tree</button>
      <button onclick="makeChoice('hide')">Hide in the bushes</button>
    `;
  } else if (choice === "left") {
    storyElement.textContent = "You take the left path and find an old abandoned cabin. The door is slightly open. Will you go inside or keep walking?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('enter')">Enter the cabin</button>
      <button onclick="makeChoice('walk')">Keep walking</button>
    `;
  } else if (choice === "right") {
    storyElement.textContent = "You take the right path and stumble upon a river. You see something shining in the water. Will you investigate or move on?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('investigate')">Investigate</button>
      <button onclick="makeChoice('moveOn')">Move on</button>
    `;
  } else if (choice === "climb") {
    storyElement.textContent = "You climb a tree and wait until morning. The creatures eventually leave, and you see a trail leading to a village. Will you follow it?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('followTrail')">Follow the trail</button>
      <button onclick="makeChoice('stayInTree')">Stay in the tree</button>
    `;
  } else if (choice === "hide") {
    storyElement.textContent = "You hide in the bushes, but the creatures find you. You try to run but trip over something—a hidden trapdoor. Will you open it?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('openTrapdoor')">Open the trapdoor</button>
      <button onclick="makeChoice('runFurther')">Keep running</button>
    `;
  } else if (choice === "enter") {
    storyElement.textContent = "Inside the cabin, you find an old map and some supplies. The map shows a treasure location. Will you follow the map?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('followMap')">Follow the map</button>
      <button onclick="makeChoice('leaveCabin')">Leave the cabin</button>
    `;
  } else if (choice === "walk") {
    storyElement.textContent = "You keep walking and find a strange glowing tree. It seems magical. Will you touch it?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('touchTree')">Touch the tree</button>
      <button onclick="makeChoice('ignoreTree')">Ignore the tree</button>
    `;
  } else if (choice === "investigate") {
    storyElement.textContent = "You find a shiny gemstone in the water. It seems enchanted. Will you take it or leave it?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('takeGem')">Take the gemstone</button>
      <button onclick="makeChoice('leaveGem')">Leave it</button>
    `;
  } else if (choice === "moveOn") {
    storyElement.textContent = "You move on and discover a small village. The villagers seem friendly but secretive. Will you trust them?";
    choicesElement.innerHTML = `
      <button onclick="makeChoice('trustVillagers')">Trust them</button>
      <button onclick="makeChoice('exploreVillage')">Explore on your own</button>
    `;
  } else if (choice === "followTrail") {
    storyElement.textContent = "You follow the trail to a bustling town. Your adventure continues, full of possibilities.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "stayInTree") {
    storyElement.textContent = "You stay in the tree but run out of food and water. Your adventure ends here.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "openTrapdoor") {
    storyElement.textContent = "The trapdoor leads to an underground tunnel. You follow it and escape the creatures. You find a hidden treasure!";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "runFurther") {
    storyElement.textContent = "You keep running but get lost in the forest. Eventually, you find a road leading back to safety.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "followMap") {
    storyElement.textContent = "The map leads you to a hidden treasure. You win!";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "leaveCabin") {
    storyElement.textContent = "You leave the cabin and continue exploring the forest. The adventure is still ahead.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "touchTree") {
    storyElement.textContent = "The tree grants you magical powers. You become a protector of the forest.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "ignoreTree") {
    storyElement.textContent = "You ignore the tree and continue your journey. What lies ahead is uncertain.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "takeGem") {
    storyElement.textContent = "The gemstone curses you, and you become lost in the forest forever.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "leaveGem") {
    storyElement.textContent = "You leave the gemstone and continue on your way, finding safety at last.";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "trustVillagers") {
    storyElement.textContent = "The villagers help you find your way back home. You are safe!";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  } else if (choice === "exploreVillage") {
    storyElement.textContent = "You explore the village and uncover a dark secret. Your adventure takes a new turn!";
    choicesElement.innerHTML = `<button onclick="restartGame()">Restart</button>`;
  }
}

function restartGame() {
  storyElement.textContent = "You wake up in a mysterious forest. What will you do?";
  choicesElement.innerHTML = `
    <button onclick="makeChoice('explore')">Explore the forest</button>
    <button onclick="makeChoice('stay')">Stay where you are</button>
  `;
}