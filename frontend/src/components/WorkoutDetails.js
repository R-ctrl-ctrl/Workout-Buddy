import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'


const WorkoutDetails = ({props,onsubmit}) => {
  const {dispatch} = useWorkoutContext()
  

  const senddata = (t,l,r,i)=>{
      onsubmit(t,l,r,i)
  }

  const handleClick = async()=>{
    const resp = await fetch(`/api/workouts/${props._id}`,{
      method:'DELETE',      
    })

    const json = await resp.json()
    if(resp.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }

  }

  return (
    <div className='innercard'>
      <h2>Exercise : {props.title}</h2>
      <h3>Load : {props.load}</h3>
      <h3>No of Reps : {props.reps}</h3>
      <h3>Created At : {props.createdAt}</h3>
      <button className='deletebtn' onClick={handleClick}>Delete Workout</button>
      <button className='updatebtn' onClick={()=> senddata(props.title,props.load,props.reps,props._id)}>Update Workout</button>
    </div>
  )
}

export default WorkoutDetails
