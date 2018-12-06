import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
    Checkbox,
    Button,
    Modal,
    Tag
} from 'antd';
export default class WorkList extends Component{
    style = {
        position:'absolute',
        right:'10px' ,
        top:'12px'
    }
    static propTypes = {
        work:PropTypes.object.isRequired,
        index:  PropTypes.number.isRequired,
        isFinished:PropTypes.bool.isRequired,
        del:PropTypes.func.isRequired,
        update:PropTypes.func.isRequired
    }
    state = {
        isDel:false
    }
    delWork = () => {
        const {index} = this.props
        this.showConfirm(index)

    }

    updateWork = () =>{
        const {index} = this.props
        this.props.update(index)
    }


    //提示警告
    showConfirm = (index) => {
        const confirm  = Modal.confirm;
        const that = this
        confirm({
            title: `确定删除“${this.props.work.workName}”任务吗？`,
            onOk() {
                that.props.del(index)
            },
            onCancel() {

            },
        });
    }
    render(){
        const {work,isFinished} = this.props
        return (
            <div>
                <li className="list-group-item " style={{paddingBottom:'25px'}} >
                    <div style={{position:'relative'}}>
                        <Tag color="#f50" style={{height:'25px'}}>{work.workName}</Tag>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{position:'absolute',left:'30px',top:'25px',fontSize:'12px'}}>完成时间<span style={{color:'blue'}}>{work.date}</span></span>
                    </div>

                    <div style={this.style}>
                        {isFinished ? <Checkbox checked={this.props.work.checked} onChange={this.updateWork}>标记为未完成</Checkbox> :
                            <Checkbox checked={this.props.work.checked } onChange={this.updateWork}>标记为已完成</Checkbox>}
                        <Button type="primary" onClick={this.delWork}>删除</Button>

                    </div>


                </li>
            </div>
        );
    }
}