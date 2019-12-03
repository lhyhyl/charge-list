import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WorkItem from '../workItem/workItem'

export default class Unfinished extends Component {
    static propTypes = {
        works: PropTypes.array.isRequired,
        del: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired


    }

    render() {
        const { works } = this.props
        return (
            <div>
                <h1>未完成事项</h1>
                <ul className="list-group">
                    {
                        works.map((work, index) => {
                            return !work.isfinished ? (<WorkItem key={index} work={work} index={index}
                                isFinished={work.isfinished}
                                del={this.props.del} update={this.props.update} />) : null
                        })

                    }
                </ul>
            </div>
        )
    }
}