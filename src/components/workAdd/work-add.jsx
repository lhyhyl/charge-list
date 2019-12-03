import React, { Component } from 'react'
import { Input, DatePicker, Button } from 'antd'
import PropTypes from 'prop-types'
import Moment from 'moment'
export default class WorkAdd extends Component {
    static propTypes = {
        add: PropTypes.func.isRequired
    }
    state = {
        name: '',
        date: null
    }
    addWork = () => {
        const { name, date } = this.state
        this.props.add(name, date ? Moment(date.format('YYYY-MM-DD'))._i : '')
        this.setState({
            name: '',
            date: null
        })

    }

    //改变任务名状态
    handleNameChange = (event) => {
        const name = event.target.value
        this.setState({ name })
    }
    //改变完成日期状态
    handleDateChange = (value) => {
        const date = value
        this.setState({ date })
    }
    render() {
        const InputGroup = Input.Group;

        return (
            <div className="row">

                <InputGroup compact style={{ textAlign: 'center' }}>
                    <Input size="large" onChange={this.handleNameChange}
                        style={{ width: '50%' }}
                        placeholder="请输入待办事项"
                        value={this.state.name} />
                    <DatePicker style={{ width: '33%' }} size="large"
                        placeholder="选择完成日期"
                        onChange={this.handleDateChange}
                        value={this.state.date}
                    />
                    <Button type='primary' size="large" onClick={this.addWork}>添加</Button>
                </InputGroup>

            </div>
        )
    }
}