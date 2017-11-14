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
      { type: 1, sugarLevel: 104, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 4, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 132, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 156, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 3, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 169, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 123, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 140, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 101, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 62, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 2, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 82, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 150, date: "November 11, 2017 9:10 AM" },
      { type: 2, intensity: 2, duration: 120, date: "November 11, 2017 9:10 AM" },
      { type: 1, sugarLevel: 70, date: "November 11, 2017 9:10 AM" }
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
