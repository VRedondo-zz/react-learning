import { createStore } from 'redux';
import todoApp from '../reducers';
import { loadState, saveState } from './PersistData';

const configureStore = () => {
	const store = createStore(todoApp,loadState());

	store.subscribe(()=>{
		saveState({
			todos: store.getState().todos
		});
	});

	return store;
};

export default configureStore;
