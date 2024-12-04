import React, { useState } from 'react';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { generateWorkout } from './utils/function';

function App() {
  const [workout, setWorkout] = useState([]); 
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    const newWorkout = generateWorkout({ poison, muscles, goals }); // Pass as an object
    setWorkout(newWorkout || []); 

    window.location.href = '#Workout'; 
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-400 to-slate-850 text-black text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />

      {workout.length > 0 && <Workout id="Workout" workout={workout} />}
    </main>
  );
}

export default App;
