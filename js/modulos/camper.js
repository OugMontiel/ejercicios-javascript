const getAllProfile = async()=>{
    let conexion = await fetch("http://localhost:3000/profile",{method:"GET"});
    let data= await conexion.json();
    return data;
}
const postProfile = async()=>{
    let conexion = await fetch("http://localhost:3000/profile",{
        method:"POST",
        body:JSON.stringify({name})
    });
    let data= await conexion.json();
    return data;

}

export default [getAllProfile, postProfile];
