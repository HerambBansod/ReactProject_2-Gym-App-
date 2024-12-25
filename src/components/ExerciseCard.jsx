import React, { useState } from 'react';

export default function ExerciseCard(props) {
  const { exercise } = props;

  const [setsCompleted, setSetsCompleted] = useState(0);

  // Increment the sets completed
  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6); // It will reset after 5 sets
  }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-blue-400 sm:flex-wrap'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-black'>
          {exercise.name.replaceAll("_", " ").slice(0, 1).toUpperCase() + exercise.name.slice(1)} {/* Capitalizing the name */}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl mg:text-2xl flex-1 md:text-center'>
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className='text-sm text-black capitalize'>{exercise.type}</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-black text-sm'>Muscle Group</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
        {['reps', 'rest', 'tempo'].map(info => {
          return (
            <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-blue-900 w-full'>
              <h3 className='capitalize text-white'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
              <p className='font-medium'>{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncrement}
          className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full'
        >
          <h3 className='text-white text-sm capitalize'> Sets Completed</h3>
          <p className=''>{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
