import React,{Component} from 'react'
import {connect} from 'react-redux'
import Moment from 'moment'
import {addSuccess} from '../../redux/actions'
import {
    Form,
    Input,
    DatePicker,
    Button,
} from 'antd'
 class WorkAdd extends Component{
    state ={
        name:'',
        date:null
    }
     handleSubmit = (e) => {
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }

         });
         this.addWork();

     }
    addWork = () => {
        const {name,date} = this.state
        if(!name || !date){
            return
        }
        const newDate = date ? Moment(date.format('YYYY-MM-DD'))._i:''
        this.props.addSuccess({newName:name,newDate})
        this.setState({
            name:'',
            date:null
        })
        this.props.form.resetFields();

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
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="row">
                <Form onSubmit={this.handleSubmit} layout="inline" style={{margin:'0 auto'}}>
                    <FormItem
                        label="待办事项"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        {getFieldDecorator('note', {
                            initialValue:this.state.name,
                            rules: [{ required: true, message: '任务名不能为空!'  }],
                        })(
                            <Input  size="large"  onChange={this.handleNameChange}
                                    placeholder="请输入待办事项"
                                    />
                        )}
                    </FormItem>
                    <FormItem
                        label="完成时间"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        {getFieldDecorator('gender', {
                            initialValue:this.state.date,
                            rules: [{ required: true, message: '完成时间不能为空!', }],
                        })(
                            <DatePicker   size="large"
                                         placeholder="选择完成日期"
                                         onChange={this.handleDateChange}
                            />
                        )}

                    </FormItem>
                    <FormItem
                        wrapperCol={{ span: 12 }}
                    >
                        <Button type="primary" htmlType="submit" >
                            添加
                        </Button>

                    </FormItem>
                </Form>


            </div>
        )
    }
}
const WrappedApp = Form.create()(WorkAdd);
export default connect(
    state => ({project:state.project}),
    {addSuccess}
)(WrappedApp)