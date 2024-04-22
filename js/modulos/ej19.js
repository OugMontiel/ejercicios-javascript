let min = (arr)=>{
    let resultado=arr[0]
    for (let i =0;i<arr.length;i++){
        (arr[i]<resultado)?resultado=arr[i]:"";
    } 
    return resultado
}

export default min