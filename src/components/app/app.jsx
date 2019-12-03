import React, { Component } from 'react'
import Completed from '../completed/completed'
import Unfinished from '../unfinished/unfinished'
import WorkAdd from '../workAdd/work-add'
import { Divider, Modal } from 'antd'
export default class App extends Component {

    state = {
        works: [
            { workName: '英语听力', isfinished: true, checked: true, date: '2018-04-15' },
            { workName: '打篮球', isfinished: false, checked: false, date: '2018-04-05' },
            { workName: '游泳', isfinished: false, checked: false, date: '2018-06-15' },
            { workName: '蹦极', isfinished: true, checked: true, date: '2018-08-15' },
        ],
        isShow: false
    }

    warning = () => {
        Modal.warning({
            title: '任务名不能为空！',
            // content: 'some messages...some messages...',
        });
    }

    //往works里面添加数据
    add = (workName, date) => {
        const { works } = this.state
        if (!workName) {
            this.warning()
            return
        }
        works.unshift({ workName, isfinished: false, date })
        this.setState({ works })
    }

    //删除works中指定数据
    del = (index) => {
        const { works } = this.state
        works.splice(index, 1)
        this.setState({ works })
    }

    //更新work状态
    update = (index) => {
        const { works } = this.state
        works[index].isfinished = !works[index].isfinished
        works[index].checked = !works[index].checked
        this.setState({ works })
    }

    render() {
        const { works } = this.state
        return (

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
                    <WorkAdd add={this.add} />
                    <Divider />
                    <Unfinished works={works} del={this.del} update={this.update} />
                    <Divider />
                    <Completed works={works} del={this.del} update={this.update} />
                </div>
            </div>
        )
    }
}