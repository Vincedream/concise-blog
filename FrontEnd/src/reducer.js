import { combineReducers } from 'redux'

import { article } from "./redux/article.redux"
import { photo } from "./redux/photo.redux"
import { project } from "./redux/project.redux"

export default combineReducers({ article, photo, project })