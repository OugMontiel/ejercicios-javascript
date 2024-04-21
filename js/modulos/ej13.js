let removerCeros = (arr)=>{
    for (let i =arr.length-1;i>=0;i--){
        (arr[i]===0)?arr.splice(i,1):"";
    }
    return arr
}

export default removerCeros