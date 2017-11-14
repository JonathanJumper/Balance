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
   events: [
      { type: 1, sugarLevel: 96, date: "November 11, 2017 9:10 AM" },
      { type: 3, food_id: 1, date: "November 11, 2017 11:15 AM" },
      { type: 1, sugarLevel: 122, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 3, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 62, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 85, date: "November 11, 2017 9:10 AM" },
      { type: 3, food_id: 1, date: "November 11, 2017 11:15 AM" },
      { type: 1, sugarLevel: 162, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 124, date: "November 11, 2017 9:10 AM" },
      { type: 3, food_id: 1, date: "November 11, 2017 11:15 AM" },
      { type: 1, sugarLevel: 145, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 169, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 122, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 2, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 78, date: "November 11, 2017 9:10 AM" },
    ]
})

/* ------------- Reducers ------------- */

// failed to get the avatar
export const addSugarLevel = (state, { sugarLevel }) => {
   return state.merge({ events: [...state.events, sugarLevel] })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
   [Types.ADD_SUGAR_LEVEL]: addSugarLevel
})
