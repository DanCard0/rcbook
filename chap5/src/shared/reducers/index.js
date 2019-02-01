import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import coins from '../../reducers/coinsReducer';
import phrases from '../../reducers/phrasesReducer';
import device from './deviceReducer';

const rootReducer = combineReducers({
    coins,
    phrases,
    device,
    form: formReducer
});

export default rootReducer;