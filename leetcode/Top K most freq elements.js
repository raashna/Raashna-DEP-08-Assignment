/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq= new Map();
    nums.forEach(num=>{
        freq.set(num,(freq.get(num) || 0)+1);
    });
    let sortedArray= Array.from(freq).sort((a,b)=> b[1]-a[1]);
    let ans=[];
    for (let i=0;i<k;i++){
        ans.push(sortedArray[i][0]);
    }
    return ans;
};