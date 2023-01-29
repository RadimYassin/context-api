
var idI=1
export default (state,action)=> {

 switch (action.type) {
    case "ADD":
     return {...state,todos:[{todos:action.payload,id:idI++},...state.todos]}
     case "DEL":
     return{...state,todos:state.todos.filter(i=>i.id!==action.payload)};
     case "UP":
      return {...state,todos:state.todos.map(i=>{
        if (i.id==action.isId) {
            return {id:i.id ,todos:action.value}
        }
        return i
      })}
    default: return state;
       
 }
}
