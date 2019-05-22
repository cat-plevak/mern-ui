import React, {Component} from 'react';
import { tsConstructorType } from '@babel/types';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo_description: '',
            todo_responsible: ''
        }
    }
    render() {
        return (
            <div>
                <p>Welcome to CreateTodo Component</p>
            </div>
        )
    }
}