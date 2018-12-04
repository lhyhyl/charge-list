import React,{Component} from 'react'
import Completed from '../completed/completed'
import Unfinished from '../unfinished/unfinished'
import WorkAdd from '../workAdd/work-add'
import {Divider } from 'antd'
export default class App extends Component{

    state = {
        works:[
            {workName:'英语听力',isfinished:true,checked:true},
            {workName:'打篮球',isfinished:false,checked:false},
            {workName:'游泳',isfinished:false,checked:false},
            {workName:'蹦极',isfinished:true,checked:true},
        ]
    }

    //往works里面添加数据
    add = (workName) => {
        const {works} = this.state
        if(!workName){
            alert('任务名不能为空！')
            return
        }
        works.unshift({workName,isfinished:false})
        this.setState({works})
    }

    //删除works中指定数据
    del = (index) => {
        const {works} = this.state
        works.splice(index,1)
        this.setState({works})
    }

    //更新work状态
    update = (index) => {
        const {works} = this.state
        works[index].isfinished =  !works[index].isfinished
        works[index].checked =  !works[index].checked
        this.setState({works})
    }
    render(){
        const {works} = this.state
        return(

            <div>
                <header className='site-header jumbotron'>
                   <div className="container">
                       <div className="row">
                           <div className="col-xs-12">
                               <h1>待办清单</h1>
                           </div>
                       </div>
                   </div>
                </header>
                <div className="container">
                    <WorkAdd add={this.add}/>
                    <Divider/>
                    <Unfinished works = {works} del={this.del} update={this.update}/>
                    <Divider/>
                    <Completed works = {works} del={this.del} update={this.update}/>
                </div>
            </div>
        )
    }
}