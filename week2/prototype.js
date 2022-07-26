// Test case
const arr = [0,2,4,6];
// Map
Array.prototype.myMap = function(cb){
    let map =[];
    for(let i = 0; i< this.length;i++){
        map.push(this[i],i,this);
    }
     return map;
}

//------------------------------------

// Filter 
Array.prototype.myFilter = function(cb){
    let filterArr = [];
    for (let i =0; i < this.length;i++){
        if(cb(this[i],i,this)){
            filterArr =[...filterArr,this[i]]; 
        }
    }
    return filterArr;
}

//----------------------

// Reduce
Array.prototype.myReduce = function(cb, initial_value){
  let res = 0;
  if (initial_value){
    res = initialValue;
  }

  for(let i = 0; i < this.length;i++){
    res = cb(this[i],i,this);
  }
  return res;
}

//--------- Implementing---------------

const arrMap = arr.myMap((e)=> e);
console.log(arrMap);

const arrFilter =arr.myFilter((e)=> e < 2);
console.log(arrFilter);
  

const arrReduce = arr.myReduce((prev,curr)=> prev + curr);

console.log(arrReduce);


