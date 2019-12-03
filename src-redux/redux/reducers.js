/*
包含多个reducer函数，根据老的state和action返回新的state
* */

import {combineReducers} from 'redux';
import {
    ADD_DATE,
    DEL_DATE,
    UPDATE_DATE
} from './action-types'
const initWorks = {
    works:[
        {workName:'英语听力',isfinished:true,checked:true,date:'2018-04-15'},
        {workName:'打篮球',isfinished:false,checked:false,date:'2018-04-05'},
        {workName:'游泳',isfinished:false,checked:false,date:'2018-06-15'},
        {workName:'蹦极',isfinished:true,checked:true,date:'2018-08-15'},
    ],
    isShow:false
}

//产生work状态的reducer
function project(state=initWorks,action) {
    switch(action.type){
        case ADD_DATE:
            const work = {workName:action.data.newName,isfinished:false,checked:false,date:action.data.newDate}
            state.works.unshift(work)
            return {...state}
        case DEL_DATE:
            state.works.splice(action.data,1)
            return {...state}
        case UPDATE_DATE:
            state.works[action.data].isfinished = !  state.works[action.data].isfinished
            state.works[action.data].checked = ! state.works[action.data].checked
            return {...state}
        default:
            return state
    }
}

export default combineReducers({
    project
})