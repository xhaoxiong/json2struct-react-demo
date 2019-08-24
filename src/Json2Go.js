import React, { Component } from 'react';
import  * as actionCreators  from './store/actionCreators.js';
import { connect } from 'react-redux';
import { Radio , Checkbox , message } from 'antd';
import './style.css';

class Json2Go extends Component {
  constructor(props){
      super(props)
  }
  render(){
    const { contactValue,contactChangeHandle, inputValue,inputChangeHandle, radioChangeHandle, radioValue, convertHandle, rotateCount,outputValue,outputFoucus} = this.props;
    return(
      <div className="App">
          <header>
            <div className="intro">
              <div className="title">
                <h1>Json-go-struct</h1>
                <h2>Convert to Go struct</h2>
              </div>
              <div>
                <p>该工具可立即将JSON/YAML转换为Go类型定义. 在左侧粘贴JSON/YAML结构,右侧将生成等效的Go类型,可以将其粘贴到程序中.</p>
                <p>针对数组json串,该工具的不能生成非内联的json结构体</p>
                <p>© 2019 xhaoxiong</p>
              </div>
              <div>
                 <img id="brand" src="https://mholt.github.io/json-to-go/resources/images/json-to-go.png"/>
              </div>
            </div>
          </header>
          <div className="select">
            <Radio.Group onChange={radioChangeHandle} value={radioValue}>
              <Radio value="JSON">JSON</Radio>
              <Radio value="YAML">YAML</Radio>
            </Radio.Group>
            <Checkbox onChange={contactChangeHandle}>是否内联(勾选为是)</Checkbox>
          </div>
          <table>
            <tbody>
              <th className="json-word">
               {radioValue}
              </th>
              <th className="crow-word">→</th>
              <th className="go-word">
                Go
              </th>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className="textarea-contain">
                  <textarea id="input" value={inputValue}  onChange={inputChangeHandle}>

                  </textarea>
                </td>
                <td className="textarea-contain">
                  <textarea id="output" onFocus={()=>{outputFoucus(outputValue)}} onClick={()=>{outputFoucus(outputValue)}} ref={(ref)=>outputFoucus(outputValue)} value={outputValue}>

                  </textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={ () => convertHandle(inputValue,radioValue,contactValue)}>转!</button>
          <div className="rotate-count">成功转换了{rotateCount}次</div>
          <footer>
            © 2019 xhaoxiong<br/>这是通过<a href="https://github.com/ChimeraCoder/gojson">gojson接入</a> 模仿<a href="https://mholt.github.io/json-to-go/">该网站</a>用react与golang接口实现了一遍.
          </footer>
      </div>
      )}

  componentDidMount(){
    this.props.getRotateCount()
  }}

const mapStateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    radioValue:state.radioValue,
    contactValue:state.contactValue,
    outputValue:state.outputValue,
    rotateCount:state.rotateCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeHandle(e){
      dispatch(actionCreators.inputChange(e.target.value))
    },
    radioChangeHandle(e)  {
      dispatch(actionCreators.radioChange(e.target.value))
    },
    contactChangeHandle(e){
      dispatch(actionCreators.contactChange(e.target.checked))
    },
    convertHandle(inputValue,radioValue,contactValue) {
      if(inputValue===''){
        message.error('请输入需要转换的字符串');
        return
      }
     dispatch(actionCreators.getJsonInfo(inputValue,radioValue,contactValue))
    },
    getRotateCount(){
      dispatch(actionCreators.getRotateCount())
    },
    outputFoucus(outputValue){
      if (outputValue!==""){
        document.getElementById('output').select()
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Json2Go);
