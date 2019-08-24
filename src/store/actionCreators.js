import * as actionTypes from './actionTypes';
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
  return (dispatch) =>{
    axios.get("/api/rotate/count").then((res) => {
      let data=res.data
      dispatch(rotateCount(data.data));
    }).catch((err) =>{
    })
  }
}

export const getJsonInfo = (inputValue,radioValue,contactValue) => {
  return (dispatch) =>{
    axios({
          url:'/api/rotate',
          method: 'post',
          data: {input_val:inputValue,cate:radioValue,contact:contactValue},
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
    }).then((res) => {
      let data=res.data
      dispatch(outputValue(data.data));
      dispatch(getRotateCount())
    }).catch((err) =>{
    })
  }
}

export default actionCreators;


