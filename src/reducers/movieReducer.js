let moviesDefault={
  movies:[],
  moviesByCategorie:[],
  errors:false,
  fetched:false,
  fetching:false,
}

function separeteByCategori(movies){
  let moviesByCategori=[];
  for (var i = 0; i < movies.length; i++) {
    for (var j = 0; j < movies[i].categories.length; j++) {
      let seted=false;
      for (var k = 0; k < moviesByCategori.length; k++) {
        if(moviesByCategori[k].name==movies[i].categories[j]){
          console.log(moviesByCategori[k]);
          moviesByCategori[k].movies.push(movies[i]);
          seted=true;
        }
      }
      if(!seted){
        moviesByCategori.push({name:movies[i].categories[j],movies:[movies[i]]});
      }
    }
  }
  return moviesByCategori;
}

export default function reducer(state=moviesDefault,action){
  switch (action.type) {
    case "FETCH_MOVIES_START":
      state = {...state, fetching:true};
      break;
    case "FETCHED_MOVIES":
      state = {...state, movies:action.payload,moviesByCategorie:separeteByCategori(action.payload),fetching:false,fetched:true};
      break;
    case "FETCHED_MOVIES_ERROR":
      state = {...state, fetching:false,errors:action.payload};
      break;
  }
  return state;
}
