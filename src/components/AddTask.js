import React from 'react'
import { MANDATORY_FIELDS_MISSING } from '../constants/Error'

class AddTask extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            error: {
                code: "",
                message: ""
            }
        }

        this.addTask = this.addTask.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate() {
        if (!this.state.title) {
            throw MANDATORY_FIELDS_MISSING
        }

        if(!this.state.description) {
            throw MANDATORY_FIELDS_MISSING
        }
    }

    addTask() {
        try {
            this.validate()

            this.props.updateTodoList({
                title: this.state.title,
                description: this.state.description
            })

            this.setState({
                title: "",
                description: "",
                error: {
                    code: "",
                    message: ""
                }
            })
        } catch (error) {
            this.setState({
                error: error
            })
        }
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div className="task">
                <h6>{this.state.error.message}</h6>
                <input placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
                <textarea placeholder="Description" onChange={this.handleChangeDescription} value={this.state.description}></textarea>
                <button onClick={this.addTask}>Add Task</button>
                <div className="clear"></div>
            </div>
        )
    }
}

export default AddTask