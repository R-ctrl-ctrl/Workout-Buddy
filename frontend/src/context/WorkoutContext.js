import React , {createContext, useReducer} from 'react'

export const workoutContext = createContext()

export const workoutReducer = (state,action)=>{
    switch(action.type){
        case 'SET_WORKOUT':
            return {
                workouts:action.payload
            }

        case 'CREATE_WORKOUT':
            return {
                workouts : [action.payload , ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts : state.workouts.filter((w)=>w._id !== action.payload._id)
            }

        case 'UPDATE_WORKOUT':
            return {
                workouts:state.workouts.map((w)=>{
                    if(w._id === action.payload._id){
                        return{
                            ...w,
                             title : action.payload.title,
                             load : action.payload.load,
                             reps:action.payload.reps
                        }
                    }
                    return w;
                })
            }

         default:
            return state

    }
}

export const WorkoutContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(workoutReducer,{
        workouts:null
    })
    return(
    <workoutContext.Provider value={{...state,dispatch}} >
            {children}
    </workoutContext.Provider>
    )
}

export default workoutContext
