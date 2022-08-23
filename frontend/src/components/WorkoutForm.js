import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'


const WorkoutForm = () => {
  const {dispatch} = useWorkoutContext()
    const [title,setTitle] = useState("")
    const [load,setLoad] = useState()
    const [reps,setReps] = useState()
    const [error,setError] = useState("")


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const workout = {title,load,reps}

        const response = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        else{
            setError(null)
            console.log('new workout added')
            setTitle("")
            setLoad("")
            setReps("")
            dispatch({type:'CREATE_WORKOUT' , payload:json})
        }
    }
  return (
    
      <form onSubmit={handleSubmit} className='forum'>
        <input type="text" placeholder='Enter name of exercise' onChange={(e)=>setTitle(e.target.value)} value={title} />
        <input type="text" placeholder='Enter load' onChange={(e)=>setLoad(e.target.value)} value={load} />
        <input type="text" placeholder='Enter no of reps' onChange={(e)=>setReps(e.target.value)} value={reps}/>
        <button>Add Workout</button>
        {error && <div>{error}</div>}
      </form>
    
  )
}

export default WorkoutForm
