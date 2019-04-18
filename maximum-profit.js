// function getMaxProfit(arr) {
//   var minIdx = 0;
//   var maxIdx = 1;
//   var currMin = 0;
//   var maxProfit = 0;

//   if(arr.length < 2) {
//     throw new Error('Need at lease two time periods to be profitable!');
//   };

//   for(var i = 1; i < arr.length; i++) {
//     // new current min
//     if(arr[i] < arr[currMin]) {
//       currMin = i;
//     };

//     // new best profit
//     if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
//       maxIdx = i;
//       minIdx = currMin;
//     }
//   }

//   maxProfit = arr[maxIdx] - arr[minIdx];
//   return maxProfit;
// }

// var arr1 = [10, 7, 2];
// var arr2 = [1];
// console.log(getMaxProfit(arr1));

function StockPicker(arr) { 
  
  var max_profit = -1;
  var buy_price = 0;
  var sell_price = 0;
  
  // this allows our loop to keep iterating the buying
  // price until a cheap stock price is found
  var change_buy_index = true;
  
  // loop through list of stock prices once
  for (var i = 0; i < arr.length-1; i++) {
    
    // selling price is the next element in list
    sell_price = arr[i+1]; 
    
    // if we have not found a suitable cheap buying price yet
    // we set the buying price equal to the current element
    if (change_buy_index) { buy_price = arr[i]; }
    
    // if the selling price is less than the buying price
    // we know we cannot make a profit so we continue to the 
    // next element in the list which will be the new buying price
    if (sell_price < buy_price) {
      change_buy_index = true; 
      continue;
    }
    
    // if the selling price is greater than the buying price
    // we check to see if these two indices give us a better 
    // profit then what we currently have
    else { 
      var temp_profit = sell_price - buy_price;
      if (temp_profit > max_profit) { max_profit = temp_profit; }
      change_buy_index = false;
    }
    
  }
  
  return max_profit;
         
}

console.log(StockPicker([1,1,3]));