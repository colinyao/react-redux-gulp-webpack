import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppleItem from '../components/AppleItem';
import * as TodoActions from '../actions/index';
import '../src/css/base.css';
class AppleBasket extends React.Component{
     constructor(props){
     	   super(props);
     	   this.state={
     	   	weight:0
     	   }
     };
     handleChange(e){
         this.setState({'weight':e.target.value})
     };
     render(){
     	      let data={
     	      	    nowWeight:0,
     	      	    eatedWeight:0,
                  restWeight:0
     	      }
     	      const{state,actions}=this.props;  //通过解构从props获取到需要的state和actions

     	      state.apples.map(apple=>{
     	      	     let selector=apple.isEaten?"eatedWeight":"nowWeight";

     	      	     data[selector]+=Number(apple.weight);
     	      })
     	      data.restWeight=data.nowWeight;
	     	return(
                       <div className="appleBasket">
                       	   <div className="nowWeight">
	                       	   <p>现重</p>
	                       	   <p>{data.nowWeight}克</p>
                       	   </div>
                       	   <div className="eatedWeight">
                                    <p>已吃</p>
                                    <p>{data.eatedWeight}克</p>
                       	   </div>
                       	   <div className="restWeight">
                                    <p>剩余</p>
                                    <p>{data.restWeight}克</p>
                       	   </div>
                             <div className="clear"></div>
                       	   <div className="appleList">
                                      {state.apples.map(apple=>{
                                          if(!apple.isEaten){
                                            return <AppleItem state={apple} actions={actions} key={apple.id}/>
                                          }
                                        })
                                    }
                       	   </div>
                       	   <div className="add">
                                      <input type="text" value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                                      <button onClick={()=> actions.addApple(this.state.weight)}>增加</button>
                       	   </div>
                       </div>
	     		)
     }
}

function mapStateToProps(state) {
  return {
    state: state.todos   //将reducer中的state.todos赋值给组件的props
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)   //将actions中定义的action赋值给组件的props
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppleBasket) //通过调用mapStateToProps,mapDispatchToProps将定义好的state和actions赋值给指定组件AppleBasket