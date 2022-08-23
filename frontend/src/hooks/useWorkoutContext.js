import {workoutContext} from '../context/WorkoutContext'
import {useContext} from 'react'

export const useWorkoutContext = ()=>{
    const context = useContext(workoutContext)

    if(!context){
        throw Error('useWorkoutContext must br used insid an workoutContextProvider')
    }
    return context
}