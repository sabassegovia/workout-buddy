import { useEffect, useState } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from '../components/WorkoutForm.js'

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
      }
    }
    fetchWorkouts();
  }, []);
  //empty array, only fires once upon render

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home;