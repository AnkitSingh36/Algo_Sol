var arr= 'anskvnsonvslknojsbvlkssnvonsoklnsovkbsdvlnssvjnsklnll';
/* const x = Math.round(Math.random() * (10 - 0 + 1) + 0);
console.log(arr[x]); */
let randTime;
let captureValue;
let getRandomValue;
let getValue;
function random(max,min){
  min = !min ? 0 : min;
  randTime =Date.parse(new Date().getMilliseconds());
  captureValue = parseInt(randTime.toString().length / 2, 10);
  getRandomValue = randTime.toString().slice(captureValue ,captureValue + max.toString().length);
  getValue = getCompared(max, min,getRandomValue); 
}

 function getCompared(max, min, getRandomValue){
   let newValue;
   let newMin;
     // only valid for range in btwn 0 to max
   while(max < getRandomValue){
    getRandomValue = getRandomValue / 10;
    if(isNaN(getRandomValue)){
      getRandomValue = min;
    }
   } 
   while(min > getRandomValue){
      newValue = getRandomValue.toString().slice(0,1);
      newMin = min.toString().slice(min.length,1);
      getRandomValue = parseInt(newMin.concat(newValue),10);
   } 

   if(max < getRandomValue){
     getCompared(max, min, getRandomValue);
   }
   getRandomValue = isNaN(getRandomValue) ? min : getRandomValue;
   return getRandomValue;
} 

random(29,20);

console.log(getValue);
