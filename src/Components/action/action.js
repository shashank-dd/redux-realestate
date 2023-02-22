export const set=(name,value)=>{
    return {
        type:"set",
        payload:{nam:name,val:value}
    }
}
export const name=(name)=>{
    return {
        type:"name",
        payload:name
    }
}
export const array=(r)=>{
    return {
        type:"array",
        payload:r
    }
}
export const fil=()=>{
    return {
        type:"fil"
    }
}
export const fily=(r)=>{
    return {
        type:"fily",
        payload:r
    }
}