import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
   addSugarLevel: ['sugarLevel']
})

export const ValuesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
   sugarLevels: []
})

/* ------------- Reducers ------------- */

// failed to get the avatar
export const addSugarLevel = (state, { sugarLevel }) => {
   console.tron.log({
      message: 'akaka',
      action: sugarLevel
   })
   return state.merge({ sugarLevels: [...state.sugarLevels, sugarLevel] })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
   [Types.ADD_SUGAR_LEVEL]: addSugarLevel
})
