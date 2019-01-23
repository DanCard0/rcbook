import { combineReducers } from 'redux';

import coins from '../../reducers/coinsReducer';
import phrases from '../../reducers/phrasesReducer';
import device from './deviceReducer';

const rootReducer = combineReducers({
    coins,
    phrases,
    device
});

export default rootReducer;