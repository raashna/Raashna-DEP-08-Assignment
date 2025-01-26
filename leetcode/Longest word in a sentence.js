function find(s){
    let l= s.length;
    let longestWord="";
    let currWord="";
    let maxLength=0;
    for(let i=0;i<l;i++){
        if(s[i]!==' '){
            currWord+=s[i];
        }
        else{
            if(currWord.length>maxLength){
                maxLength=currWord.length;
                longestWord=currWord;
            }
            currWord="";
        }
    }
    if(currWord.length>maxLength){
        maxLength=currWord.length;
        longestWord=currWord
    }
    return longestWord;
}

console.log(find("A Computer science portal for geeks"));