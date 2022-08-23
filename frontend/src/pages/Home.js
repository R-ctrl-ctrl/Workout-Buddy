
import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import '../styles/App.css'

const Home = () => {

  const { workouts, dispatch } = useWorkoutContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState()
  const [reps, setreps] = useState()
  const [disp, setdisp] = useState("none")
  const [id, setID] = useState()

  const updatedata = async (e) => {
    e.preventDefault()
    const workout = { title, load, reps }
    const response = await fetch(`/api/workouts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
    } else {
      dispatch({ type: 'UPDATE_WORKOUT', payload: json })
      setdisp("none")
    }


  }

  const cancel = (e) => {
    e.preventDefault()
    setdisp("none")
  }

  const getdata = (t, l, r, i) => {

    setdisp("block")
    setTitle(t)
    setLoad(l)
    setreps(r)
    setID(i)
  }
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUT', payload: json })
      }
    }

    fetchWorkouts()

  }, [])
  return (
    <div className='home'>
      <div className='left'>
        <form className='formdiv' style={{ display: disp }}>
          <div className='subdiv'>
            <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='subdiv'>
            <input type="number" placeholder='Load' value={load} onChange={(e) => setLoad(e.target.value)} />
          </div>
          <div className='subdiv'>
            <input type="number" placeholder='reps' value={reps} onChange={(e) => setreps(e.target.value)} />
          </div>
          <div className="subdiv">
            <div className='btndiv'>
            <button onClick={updatedata}>Update</button>
            <button onClick={cancel}>Cancel</button>
            </div>
          </div>
        </form>
        <div className='cards'>
          {workouts && workouts.map((workout, key) => {
            return (
              <div className='card' key={key}>
                <WorkoutDetails props={workout} onsubmit={getdata} />
              </div>
            )
          })}
        </div>
      </div>
      <div className='mainform'>
        <WorkoutForm />
      </div>
    </div>
  )
}

export default Home
