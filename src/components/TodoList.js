import React from 'react'
import Task from './Task'

class ToDoList extends React.Component {
    constructor(props){
        super(props)

        console.log(props.tdlist)
    }

    render() {
        return(
            <div className="list">
                <h4>To Do List</h4>
                <div>
                    {
                        this.props.tdlist.map((e, i) => {
                            return (
                                <Task key={i} 
                                    index={i} 
                                    title={e.title} 
                                    description={e.description}
                                    category="todolist"
                                    updateTask={this.props.updateTask}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ToDoList