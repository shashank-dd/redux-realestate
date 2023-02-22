const initial={
data:{
    name :    ""  ,
    propertytype :           "",
    negotable:         "",
    price:        null,
    ownership:         "",
    propertyage:         null,
    propertyapproved:         "",
    propertydescription:         "",
    bankloan:          "",
    namei: "",
    mobile: null,
    postedby: "",
    saletype: "",
    featuredpackage: "",
    ppdpackage: "",
    image: null,
    email: "",
    city: "",
    area: "",
    pincode: null,
    address: "",
    landmark: "",
    latitude: null,
    longitude: null,
    length: null,
    breadth: null,
    totalarea: null,
    areaunit: "",
    noofbhk: null,
    nooffloors: null,
    attached: "",
    westerntoilet: null,
    furnished: "",
    carparking: "",
    lift: "",
    electricity: "",
    facing: "",
},
array:[],
filter:[]
}
function redu(state=initial,action){
    switch(action.type){
        case "set": return {...state,data:{...state.data,[action.payload.nam]:action.payload.val}   };
        case "name": return {...state,data:{...state.data,name:action.payload}   };
        case "array": return {...state,array:[...action.payload] ,filter:[...action.payload]  };
        case "fil": return {...state,filter:[...state.array]  };
        case "fily": return {...state,filter:[...action.payload]  };
     
        default : return state
    }
    
}
export default redu