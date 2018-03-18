import { combineReducers } from 'redux';

import { article } from './redux/article.redux';
import { photo } from './redux/photo.redux';

export default combineReducers({ article, photo })