import React from 'react'
import './Task.css'

class Task extends React.Component {
    constructor(props) {
        super(props)

        this.updateTask = this.updateTask.bind(this)
    }

    updateTask() {
        this.props.updateTask(this.props.index)
    }

    render() {
        return (
            <div className="task">
                <h6>{this.props.title}</h6>
                <p>{this.props.description}</p>
                {/* {
                    this.props.category === "todolist"
                    ? <button onClick={this.updateTask}>Done</button>
                    : <button onClick={this.updateTask}>Not Done</button>
                } */}
                <button onClick={this.updateTask}>
                    {this.props.category === "todolist" ? "Done": "Not Done"}
                </button>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Task