
let loginDefault={
  email:'',
  password:'',
  remeber:false,
  logging:false,
  triedLog:false,
  loginFailed:false
}

export default function reducer(state=loginDefault,action){
  switch (action.type) {
    case "CHANGE_EMAIL":
      state = {...state, email:action.payload};
      break;
    case "CHANGE_PASSWORD":
      state = {...state, password:action.payload};
      break;
    case "LOGIN_START":
      state = {...state, logging:true};
      break;
    case "CHANGE_REMEBER":
      state = {...state,remeber:action.payload};
      break;
    case "LOGIN_ERROR":
      state = {...state,logging:false,triedLog:true,loginFailed:true}
      break;
    case "LOGIN_SUCESS":
      state = {...state,logging:false,triedLog:true,loginFailed:false}
      break;
  }
  return state;
}
