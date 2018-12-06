import React,{Component} from 'react'
import {connect} from 'react-redux'
import Completed from '../completed/completed'
import Unfinished from '../unfinished/unfinished'
import WorkAdd from '../workAdd/work-add'
import {Divider } from 'antd'
 class App extends Component{
    render(){
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
                    <WorkAdd />
                    <Divider/>
                    <Unfinished />
                    <Divider/>
                    <Completed />
                </div>
            </div>
        )
    }
}
export default connect(
    state =>({project:state.project})
)(App)