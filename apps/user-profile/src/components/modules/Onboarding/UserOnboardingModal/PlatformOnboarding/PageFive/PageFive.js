import { useOnboardingDataContext } from './../../../../../../context/OnboardingDataContext';
import { Typography } from '@devlaunchers/components/components/atoms';
import { onboardingActions } from './../../../../../../state/actions';
import { useState } from 'react';

export default function PageFive() {
  const { onboardingData, dispatch } = useOnboardingDataContext();
  const [interestList, setInterestList] = useState(
    onboardingData.user.interest
  );

  function onSelectedInterest(selectedInterest) {
    return () => {
      if (hasId(selectedInterest.id)) {
        const updateInterests = updateInterestList(selectedInterest.id);
        setInterestList(updateInterests);
        dispatch({
          type: onboardingActions.SET_USERS_INTEREST,
          data: updateInterests,
        });
      }
    };
  }

  function hasId(idToLookFor) {
    let idFound = false;
    interestList.forEach((interest) => {
      if (interest.id == idToLookFor) {
        idFound = true;
      }
    });
    return idFound;
  }

  function updateInterestList(idToUpdate) {
    // deep copy array
    const newList = JSON.parse(JSON.stringify(interestList));
    newList.forEach((interest) => {
      if (interest.id == idToUpdate) {
        interest.selected = !interest.selected;
      }
    });
    return newList;
  }

  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col text-center">
        <div>
          <Typography variant="secondary">ABOUT YOU</Typography>
          <Typography textweight="light" textalign="center" type="h3">
            Select Your Interests Below
          </Typography>
        </div>
        <Typography className="m-0" variant="secondary">
          We’ll use this to help you find projects that match your needs
        </Typography>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-h-[308px] max-w-[650px] overflow-auto">
          {interestList.map((interest) => (
            <div
              className={`py-3 px-8 rounded-3xl cursor-pointer font-nunito-sans text-base  border-2 border-neptune-700 
              ${
                interest.selected
                  ? 'bg-neptune-700 text-white'
                  : 'bg-white text-neptune-700'
              }`}
              onClick={onSelectedInterest(interest)}
            >
              {interest.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
