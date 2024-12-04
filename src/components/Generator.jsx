import React, { useState } from 'react';
import SectionWrap from './SectionWrap';
import { SCHEMES, WORKOUTS } from '../utils/exercise';
import Button from './Button';


function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-6 text-center mb-8">
      <div className="flex items-center justify-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto max-w-md">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const { setMuscles, muscles, poison, setPoison, goals, setGoals , updateWorkout } = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 1) {
      return;
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 1) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrap id={'generate'} Header="Craft Your Fitness Journey" title={['Let\'s', 'Build', ' some strength']}>
      <Header index="01" title="Pick Your Set" description="Select the workout you want to perform" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={
                'bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300' +
                (type === poison ? ' border-2 border-blue-600' : ' border border-blue-400')
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>

      <Header index="02" title="Focus Your Aim" description="Choose Your Muscle Group" />
      <div className="bg-blue-400 border border-solid border-white-400 flex flex-col rounded-lg overflow-hidden mb-8">
        <button onClick={toggleModal} className="focus:outline-none hover:bg-blue-300">
          <div className="relative p-4 flex items-center justify-between">
            <p className="capitalize">{muscles.length === 0 ? 'Select Muscles Group' : muscles.join(', ')}</p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </button>
        {showModal && (
          <div className="flex flex-col gap-2 p-3">
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map(
              (muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    className={
                      'px-4 py-2 rounded-md text-left transition-colors duration-200 hover:bg-blue-500 hover:text-white' +
                      (muscles.includes(muscleGroup) ? ' bg-blue-600 text-white' : ' bg-white')
                    }
                    key={muscleGroupIndex}
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                  >
                    <p className="uppercase">{muscleGroup.replaceAll('_', ' ')}</p>
                  </button>
                );
              }
            )}
          </div>
        )}
      </div>

      <Header index="03" title="Dominate Your Limits" description="Select your ultimate objective." />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(scheme);
              }}
              className={
                'bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300' +
                (scheme === goals ? ' border-2 border-blue-600' : ' border border-blue-400')
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center mb-8">
        <Button func={updateWorkout} text="Formulate" className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-transform duration-200" />
      </div>
    </SectionWrap>
  );
}
