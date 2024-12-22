import React from 'react';
import ExerciseCard from './ExerciseCard';
import SectionWrap from './SectionWrap';

export default function Workout(props) {
  const { workout = [] } = props;
  console.log(workout);

  return (
    <SectionWrap Header="Craft Your Fitness Journey" title={['Ready', 'Set', 'Sweat!']}>
      <div id="Workout" className="flex flex-col gap-4">
        {workout.length > 0 ? (
          workout.map((exercise, i) => (
            <ExerciseCard exercise={exercise} key={i} />
          ))
        ) : (
          <div className="text-center text-gray-500">No workout data available.</div>
        )}
      </div>
    </SectionWrap>
  );
}
