import React,{Component} from 'react'
import {connect} from  'react-redux'
//import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'

import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component{
    render(){
        const {inputValue,changeInputValue,handleClick,list,handleDelete} = this.props
        return (
            <div>
                <div>
                    <input type="text" value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,idx) => {
                            return <li onClick={handleDelete.bind(this,idx)} key={idx}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            // const action = {
            //     type:CHANGE_INPUT_VALUE,
            //     value:e.target.value
            // }
            const action = getInputChangeAction(e.target.value)
            dispatch(action);
            console.log(action);
        },
        handleClick(){
            // const action = {
            //     type:ADD_ITEM
            // }
            const action = getAddItemAction()
            dispatch(action)
        },
        handleDelete(idx){
            // const action = {
            //     type:DELETE_ITEM,
            //     idx:idx
            // }
            const action = getDeleteItemAction(idx)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)