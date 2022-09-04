import { legacy_createStore as createStore,applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { formreducer } from './reducer'



export const store= createStore(formreducer,applyMiddleware(thunk))