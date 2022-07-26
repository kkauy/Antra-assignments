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
Array.prototype.myReduce = function(callback, initial_value){
  let res = 0;
  if (initial_value){
    res = initialValue;
  }

  for(let i = 0; i< this.length;i++){
    cb(this[i]+ res);
  }
  return res;
}

//--------- Implementing---------------

const arrMap = arr.myMap((e)=>{
    return e;
});
console.log(arrMap);

const arrFilter =arr.myFilter((e)=>{
    if(e >= 2) return e;
});
console.log(arrFilter);
  

const arrReduce = arr.myReduce((prev,curr)=>{
    return prev + curr;
},0);


