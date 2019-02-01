import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
    // Functional component to render an input...
    renderInput = ({ input }) => <input {...input} type="text" />;

    onSubmit = values => {
        const { addTask, dispatch, reset } = this.props;

        // Resetting our form, this will clear our input...
        dispatch(reset('todo'));

        // Executing our addTask method and passing the form values.
        addTask(values);
    };

    render() {
        // handleSubmit is part of Redux Form to handle the onSubmit event
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                {/* Field is a Redux Form Component, we need to pass the name of the input and the component
                we are using to render it */}
                <Field
                    name="task"
                    component={this.renderInput}
                />
            </form>
        )
    }
}

// With this we named our form reducer for this specific form (todo).
export default reduxForm({ form: 'todo' })(TodoForm);