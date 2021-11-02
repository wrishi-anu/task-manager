import React from 'react'
import Task from './Task'

class DoneList extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="list">
                <h4>Done List</h4>
                <div>
                    {
                        this.props.dlist.map((e, i) => {
                            return (
                                <Task key={i} 
                                    index={i} 
                                    title={e.title} 
                                    description={e.description}
                                    updateTask={this.props.updateTask}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default DoneList