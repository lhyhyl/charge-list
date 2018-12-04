import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Checkbox,Button} from 'antd';
export default class WorkList extends Component{
    style = {
        float:'right',
        position:'absolute',
        right:'10px' ,
        top:'8px'
    }
    static propTypes = {
        work:PropTypes.object.isRequired,
        index:  PropTypes.number.isRequired,
        isFinished:PropTypes.bool.isRequired,
        del:PropTypes.func.isRequired,
        update:PropTypes.func.isRequired
    }

    delWork = () => {
        const {index} = this.props
        this.props.del(index)
    }

    updateWork = () =>{
        const {index} = this.props
        this.props.update(index)
    }

    render(){
        const {work,isFinished} = this.props
        return (
            <div>
                <li className="list-group-item" >
                    <span>{work.workName}</span>
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