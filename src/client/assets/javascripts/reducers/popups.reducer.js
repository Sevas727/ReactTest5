
export default function (state = {
  popupsQue: [],
  popups: {
    showPopap1: false,
    showPopap2: false,
    showPopap3: false
  }

}, action) {

    switch (action.type){
      case 'SET_POPUPS':
            return {...state, popupsQue: action.data};
      case 'SHOW_POPUP': {

        let popups = {...state.popups};
            popups[state.popupsQue[0]] = !popups[state.popupsQue[0]];
            return {...state, popups}
      }
      case 'CLOSE_POPUP': {

        let popups = {...state.popups};
        let popupsQue = state.popupsQue.slice();
            popups[state.popupsQue[0]] = !popups[state.popupsQue[0]];
            popupsQue.shift();
            return {...state, popups, popupsQue}
      }
        default:
            return state
    }
}
