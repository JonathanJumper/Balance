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
   sugarLevels: [
      { sugarLevel: 96, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 104, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 132, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 82, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 140, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 101, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 70, date: "November 11, 2017 9:10 AM" },
      { sugarLevel: 82, date: "November 11, 2017 9:10 AM" }
    ]
})

/* ------------- Reducers ------------- */

// failed to get the avatar
export const addSugarLevel = (state, { sugarLevel }) => {
   return state.merge({ sugarLevels: [...state.sugarLevels, sugarLevel] })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
   [Types.ADD_SUGAR_LEVEL]: addSugarLevel
})
