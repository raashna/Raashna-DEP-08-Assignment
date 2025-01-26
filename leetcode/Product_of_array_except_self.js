/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod =1;
    let count=0;
    let count1=0;
    let flag= false;
    let ans= [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            break;
        }
        if (nums[i]===0){
            count++;
        }
        if(i===nums.length-1 && nums[i]===0 && count>=1){
            for(let i=0;i<count;i++){
                ans.push(0);
            }
            return ans;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            prod*=nums[i];
        }else{
            flag=true;
            count1++;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(flag === true){
            if(nums[i] !=0){
                ans.push(0);
            }else{
                if(count1>1){
                    ans.push(0);
                }
                else{
                    ans.push(prod);
                }
            }
        }else{
            ans.push(prod / nums[i]);
        }
    }
    return ans;
};