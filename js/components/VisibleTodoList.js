import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

const mapStateToProps = (state, { params }) => ({
	todos : getVisibleTodos(state, params.filter)
});
const mapDispatchToProps = (dispatch) => ({
	onTodoClick : (id) => dispatch(toggleTodo(id))
});

const VisibleTodoList = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList));

export default VisibleTodoList;