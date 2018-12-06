import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import WorkItem from '../workItem/workItem'
 class Completed extends Component{


    render(){
        const {works} = this.props.project
        return(
            <div>
                <h1>已完成事项</h1>
                <ul className="list-group">
                    {
                      works.map((work,index)=>{
                          return work.isfinished ? ( <WorkItem key={index} work={work} index={index}/>): null
                      })

                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({project:state.project}),

)(Completed)