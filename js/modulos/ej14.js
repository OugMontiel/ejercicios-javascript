const sumarArreglo = (array,start,end)=>{
    if(end<=0 && start==0) return 0;
    let result = array.slice(start,end+1)
    result = result.reduce((a,b)=>a+b,0); 
    return result
}

export default sumarArreglo

