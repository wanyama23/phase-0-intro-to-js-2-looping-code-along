// Code your solutions in this file
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

// [
//     "Thank you, Charlie, for the wonderful birthday gift!",
//     "Thank you, Samip, for the wonderful birthday gift!",
//     "Thank you, Ali, for the wonderful birthday gift!",
//   ];

//   while ([condition]) {
//     [loop, body]
//   }

  
//   const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]


// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//       chooseSeedLocation();
//       plantSeed();
//       waterSeed();
//       keepWorking = checkForMoreSeeds();
//     }
//   }


function writeCards(names, event_name) {
  // returns an array of thank you messages for each name provided to the function
  const welcome_cards = [];
  for (let i = 0; i < names.length; i++) {
    let card_message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    welcome_cards.push(card_message);
  }

  return welcome_cards;
}

function countDown(number) {
  // invokes console.log once for each number, counting down from the number provided to zero
  // logs each number when counting down, starting from the number provided
  let counter = number;
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
}
  