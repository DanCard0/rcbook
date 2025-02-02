import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/Layout';

import { fetchTodo } from '../actions';

export default connect(({ todo }) => ({
    todo: todo.list
}), dispatch => bindActionCreators(
    {
        fetchTodo
    },
    dispatch
))(Layout);