import * as actionTypes from './actionTypes';

const defaultState={
  inputValue:'',
  outputValue:'',
  radioValue:"JSON",
  contactValue:true,
  rotateCount:0,
  outputRefState:false,
};

export default (state = defaultState, action) => {
  let newState=JSON.parse(JSON.stringify(state));
  switch(action.type){
    case actionTypes.INPUT_CHANGE:
        newState.inputValue=action.value;
      return newState;
    case actionTypes.OUTPUT_VALUE:
        newState.outputValue=action.value;
      return newState;
    case actionTypes.RADIO_CHANGE:
        newState.radioValue=!action.value;
        return newState;
    case actionTypes.CONTACT_CHANGE:
        newState.contactValue=action.value;
        return newState;
    case actionTypes.ROTATE_COUNT_CHANGE:
        newState.rotateCount=action.value;
        return newState;
    default:
      return state
  }
}
