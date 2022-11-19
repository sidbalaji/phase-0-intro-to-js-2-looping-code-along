// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts){
      for (let i = 0; i<gifts.length;i++){
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
          debugger
      }
    return gifts;
  }
  
  function writeCards(strNames,eventName){
      let returnArray = [];
      for(let counter = 0; counter < strNames.length ; counter++){
          returnArray[counter] = `Thank you, ${strNames[counter]}, for the wonderful ${eventName} gift!`
      }
      return returnArray
  }
  
  function countDown(number){
      while(number >= 0){
          console.log(number)
          number--
      }
  }