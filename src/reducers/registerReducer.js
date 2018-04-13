let registerDefault={
  register:false,
  fetching:false,
  error:true
}

export default function reducer(state=registerDefault,action){
  switch (action.type) {
    case "REGISTER_NAME_CHANGE":
      state  = {...state,name:action.payload}
      break;
    case "REGISTER_EMAIL_CHANGE":
      state  = {...state,email:action.payload}
      break;
    case "REGISTER_PASSWORD_CHANGE":
      state  = {...state,password:action.payload}
      break;
    case "REGISTER_LOGIN_CHANGE":
      state  = {...state,login:action.payload}
      break;
    case "REGISTER_CHANGE":
      state  = {...state,register:action.payload}
      break;
    case "REGISTER_START":
      state = {...state, fetching:true,register:false};
      break;
    case "REGISTERED":
      state = {...state, register:true};
      break;
    case "REGISTER_ERROR":
      state = {...state, fetching:false,errors:action.payload};
      break;
  }
  return state;
}
