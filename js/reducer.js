// add code snippets from README

let state 
// = {count: 0}
 
function reducer(state={count:0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

// DON'T NEED THIS ARG BELOW
// BELONGS IN REDUCER?
// state={count:0},
function dispatch(action) {
    state = reducer(state, action)
    render()
}


function render(){
    // let document.getElementById("container").innerHTML = state.count
    // let container = document.getElementById('container')
    // container.textContent = state.count
    document.getElementById('container').textContent = state.count
}


dispatch({type: '@@INIT'}) 


let button = document.getElementById('button')

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})