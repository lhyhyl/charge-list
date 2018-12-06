import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    delSuccess,
    updateSuccess
} from '../../redux/actions'
import PropTypes from 'prop-types'
import {
    Checkbox,
    Button,
    Modal,
    Tag
} from 'antd';
 class WorkList extends Component{
    style = {
        position:'absolute',
        right:'10px' ,
        top:'12px'
    }
    static propTypes = {
        work:PropTypes.object.isRequired,
        index:  PropTypes.number.isRequired,

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
        this.props.updateSuccess(index)
    }


    //提示警告
    showConfirm = (index) => {
        const confirm  = Modal.confirm;
        const that = this
        confirm({
            title: `确定删除“${this.props.work.workName}”任务吗？`,
            onOk() {
                that.props.delSuccess(index)
            },
            onCancel() {

            },
        });
    }
    render(){
        const {work} = this.props
        const {checked,isfinished,workName,date} = work
        return (
            <div>
                <li className="list-group-item " style={{paddingBottom:'25px'}} >
                    <div style={{position:'relative'}}>
                        <Tag color="#f50" style={{height:'25px'}}>{workName}</Tag>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{position:'absolute',left:'30px',top:'25px',fontSize:'12px'}}>完成时间<span style={{color:'blue'}}>{date}</span></span>
                    </div>

                    <div style={this.style}>
                        {isfinished ? <Checkbox checked={checked} onChange={this.updateWork}>标记为未完成</Checkbox> :
                            <Checkbox checked={checked } onChange={this.updateWork}>标记为已完成</Checkbox>}
                        <Button type="primary" onClick={this.delWork}>删除</Button>

                    </div>


                </li>
            </div>
        );
    }
}

export default connect(
    state => ({project:state.project}),
    {delSuccess,updateSuccess}
)(WorkList)