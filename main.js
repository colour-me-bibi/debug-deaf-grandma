function deafGrandma() {
  let prompt = "HEY KID!";
  let goodbyes = 0;

  while (goodbyes < 2) {
    let userInput = window.prompt(prompt);
    if (userInput === "") {
      prompt = "WHAT!?";
    } else if (userInput === "GOODBYE!") {
      goodbyes++;
      if (goodbyes === 1) {
        prompt = "LEAVING SO SOON?";
      }
    } else if (userInput.toUpperCase() !== userInput) {
      prompt = "SPEAK UP, KID!";
    } else {
      prompt = "NO, NOT SINCE 1946!";
    }
  }

  alert("LATER, SKATER!");
}

deafGrandma();
