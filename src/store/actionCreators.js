import * as actionTypes from './actionTypes';
import http from '../http/server'
import axios from 'axios';
class actionCreators {}

export const inputChange = (value) => ({
  type:actionTypes.INPUT_CHANGE,
  value
})
export const radioChange = (value) => ({
  type:actionTypes.RADIO_CHANGE,
  value
})

export const contactChange = (value) => ({
  type:actionTypes.CONTACT_CHANGE,
  value
})

export const outputValue = (value) => ({
  type:actionTypes.OUTPUT_VALUE,
  value
})

export const rotateCount =(value) =>({
  type:actionTypes.ROTATE_COUNT_CHANGE,
  value
})


export const getRotateCount = ()=>{
  return async (dispatch) =>{
    const res= await http.get("/api/rotate/count");
    dispatch(rotateCount(res.data.data));
  }
}

export const getJsonInfo = (inputValue,radioValue,contactValue) => {
  return async (dispatch) =>{
    const res = await http.postForm("/api/rotate",{input_val:inputValue,cate:radioValue,contact:contactValue});
    dispatch(outputValue(res.data.data));
    dispatch(getRotateCount());
  }
}

export default actionCreators;


