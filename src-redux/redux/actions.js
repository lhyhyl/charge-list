/*
* 包含多个actionCreator
* */

import {
    ADD_DATE,
    DEL_DATE,
    UPDATE_DATE
} from './action-types'

//添加成功的同步action
export const addSuccess = ({newName,newDate}) => ({type:ADD_DATE,data:{newName,newDate}})
//删除成功的同步action
export const delSuccess = (index) => ({type:DEL_DATE,data:index})
//更新成功的同步action
export const updateSuccess = (index) => ({type:UPDATE_DATE,data:index})