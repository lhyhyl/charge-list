import React,{Component} from 'react'
import {connect} from 'react-redux'
import Moment from 'moment'
import {addSuccess} from '../../redux/actions'
import {
    Input,
    DatePicker,
    Button,
    Modal
} from 'antd'
 class WorkAdd extends Component{
    state ={
        name:'',
        date:null
    }

     warning = () => {
         Modal.warning({
             title: '任务名不能为空！',
             // content: 'some messages...some messages...',
         });
     }
    addWork = () => {
        const {name,date} = this.state
        console.log(name)
        const newDate = date ? Moment(date.format('YYYY-MM-DD'))._i:''

        if(!this.state.name){
            this.warning()
            return
        }
        this.props.addSuccess({newName:name,newDate})
        this.setState({
            name:'',
            date:null
        })
    }

    //改变任务名状态
    handleNameChange = (event) =>{
        const name = event.target.value
        this.setState({name})
    }
    //改变完成日期状态
    handleDateChange = (value) =>{
        const date = value
        this.setState({date})
    }
    render(){
        const InputGroup = Input.Group;

        return(
            <div className="row">

                    <InputGroup compact style={{ textAlign:'center' }}>
                        <Input  size="large"  onChange={this.handleNameChange}
                                style={{ width: '50%' }}
                                placeholder="请输入待办事项"
                                value={this.state.name}/>
                        <DatePicker  style={{ width: '33%' }} size="large"
                                     placeholder="选择完成日期"
                                     onChange={this.handleDateChange}
                                     value={this.state.date}
                                    />
                        <Button type='primary' size="large" onClick={ this.addWork}>添加</Button>
                    </InputGroup>

            </div>
        )
    }
}
export default connect(
    state => ({project:state.project}),
    {addSuccess}
)(WorkAdd)