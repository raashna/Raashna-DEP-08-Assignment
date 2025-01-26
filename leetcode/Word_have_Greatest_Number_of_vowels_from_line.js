function find(s){
    let l= s.length;
    let longestWord="";
    let currWord="";
    let count=0;
    let maxLength=0;
    for(let i=0;i<l;i++){
        if(s[i]!==' '){
            if('aeiou'.includes(s[i].toLowerCase())){
                count++;
            }
            currWord+=s[i];
        }
        else{
            if(count>=maxLength){ //if there are two words with same no. of vowels it will return the last word
                maxLength=count;
                longestWord=currWord;
            }
            currWord="";
            count=0;
        }
    }
    if(count>=maxLength){
        maxLength=count;
        longestWord=currWord;
    }
    return longestWord;
}

console.log(find("A Computer science portal for geeks "));