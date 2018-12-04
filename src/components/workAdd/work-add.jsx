import React,{Component} from 'react'
import {Input} from 'antd'
import PropTypes from 'prop-types'
export default class WorkAdd extends Component{
    static propTypes = {
        add:PropTypes.func.isRequired
    }
    state ={
        name:''
    }
    addWork = () => {
        const {name} = this.state
        this.props.add(name)
        this.setState({
            name:''
        })

    }

    //改变状态
    handleNameChange = (event) =>{
        const name = event.target.value
        this.setState({name})
    }
    render(){
        const Search = Input.Search;
        return(
            <div className="row">
                    <Search
                        placeholder="请输入待办事项"
                        enterButton="添加"
                        size="large"
                        value={this.state.name}
                        onSearch={value => this.addWork(value)}
                        onChange={this.handleNameChange}
                    />

            </div>
        )
    }
}