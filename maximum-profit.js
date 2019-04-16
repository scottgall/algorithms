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

// returns -1 if no profit to be made
function maxProfit(arr) {
  var max_profit = -1;
  var buy_price = 0;
  var sell_price = 0;

  var change_buy_index = true;

  for (var)
}

//comment