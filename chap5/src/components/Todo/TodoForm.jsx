import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './TodoForm.css';

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

    renderError(field) {
        const { meta: { submitFailed, error } } = field;

        if (submitFailed && error) {
            return (
                <div className="error">
                    {error}
                </div>
            );
        }

        return null;
    }

    render() {
        // handleSubmit is part of Redux Form to handle the onSubmit event
        const { handleSubmit, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                {/* Field is a Redux Form Component, we need to pass the name of the input and the component
                we are using to render it */}
                <Field name="task" component={this.renderInput} />
                <Field name="task" component={this.renderError} />
            </form>
        )
    }
}

const validate = values => {
    const errors = {};

    if (!values.task) {
        errors.task = 'Task cannot be empty!';
    }

    return errors;
};

// With this we named our form reducer for this specific form (todo).
export default reduxForm({ validate, form: 'todo' })(TodoForm);