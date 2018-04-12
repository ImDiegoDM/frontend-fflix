let moviesDefault={
  movies:[],
  errors:false,
  fetched:false,
  fetching:false,
}

export default function reducer(state=moviesDefault,action){
  switch (action.type) {
    case "FETCH_MOVIES_START":
      state = {...state, fetching:true};
      break;
    case "FETCHED_MOVIES":
      state = {...state, movies:action.payload,fetching:false,fetched:true};
      break;
    case "FETCHED_MOVIES_ERROR":
      state = {...state, fetching:false,errors:action.payload};
      break;
  }
  return state;
}
