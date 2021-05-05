
const animation = function(sentence) {
  let time = 0;
  for (let i = 0; i < sentence.length; i++) {
    time += 50;
    setTimeout(() => {
      if (i === sentence.length - 1) {
        process.stdout.write("\n");
      } else {
        process.stdout.write(sentence[i]);
      }
    }, time);
  }
};



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = function() {
  let userInput = 0;
  rl.question('When do you wanna set your alarm?  ', (answer) => {
    // TODO: Log the answer in a database
    userInput = answer;
    if (userInput === "b" || userInput === "B") {
      console.log(`Beep Beep`);
      rl.close();
    } else if (userInput >= 1 && userInput >= 1) {
      let sentence = `Setting up timer for ${userInput} seconds`;
      animation(sentence);
      setTimeout(() => {
        console.log(`Beep Beep`);
        rl.close();
      }, userInput * 1000);
    } else {
      console.log("Sorry!, you can only input B/b or numer 1-9");
      setTimeout(() => {
        rl.close();
      }, 1500);
    }

  });
  rl.on('SIGINT', () => {
    console.log("\n" + "Thanks for using me, ciao!");
    rl.close();
  });

  // if (!arr.length)
  //   return;
  // for (let item of arr) {
  //   if (Number(item)) {
  //     if (item > 0) {
  //       setTimeout(() => {
  //         console.log(`Beeped at ${item}sec`);
  //       }, item * 1000);
  //     }
  //   }
  // }
};

timer();

// const args = process.argv.slice(2);
// const timer = function(arr) {

//   if (!arr.length)
//     return;
//   for (let item of arr) {
//     if (Number(item)) {
//       if (item > 0) {
//         setTimeout(() => {
//           console.log(`Beeped at ${item}sec`);
//         }, item * 1000);
//       }
//     }
//   }
// };

// timer(args);