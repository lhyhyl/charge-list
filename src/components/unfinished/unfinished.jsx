import React,{Component} from 'react'
import {connect} from 'react-redux'

import WorkItem from '../workItem/workItem'

 class Unfinished extends Component{
    render(){
        const {works} =this.props.project
        return(
            <div>
                <h1>未完成事项</h1>
                <ul className="list-group">
                    {
                        works.map((work,index)=>{
                            return !work.isfinished ? ( <WorkItem key={index} work={work} index={index}
                                                                  isFinished={work.isfinished}/>): null
                        })

                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({project:state.project})
)(Unfinished)