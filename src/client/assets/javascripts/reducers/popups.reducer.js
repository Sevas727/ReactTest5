
export default function (state = {
  popups: []
}, action) {

    switch (action.type){
      case 'SET_POPUPS':
            return {...state, popups: action.data}
        default:
            return state
    }
}
