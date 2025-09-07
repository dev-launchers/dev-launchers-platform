import { useOnboardingDataContext } from '../../../../../../context/OnboardingDataContext';
import { Typography } from '@devlaunchers/components/components/atoms';
import { onboardingActions } from '../../../../../../state/actions';
import { useState } from 'react';

/**
 * SkillsPage (formerly PageSix) Component
 *
 * This component allows users to select their skills during the onboarding process.
 * The selected skills are stored in local state and updated in the onboarding context.
 *
 * @return {JSX.Element} The rendered SkillsPage component.
 */
export default function SkillsPage() {
  // Access onboarding data and dispatch function from context
  const { onboardingData, dispatch } = useOnboardingDataContext();

  // Local state to manage the list of user skills
  const [skillList, setSkillList] = useState(onboardingData.user.interest);

  /**
   * Handles toggling the selection of an interest.
   *
   * @param {Object} selectedInterest - The interest to toggle.
   * @return {Function} A function to handle the click event.
   */
  function onSelectedInterest(selectedInterest) {
    return () => {
      if (hasId(selectedInterest.id)) {
        const updatedInterests = updateInterestList(selectedInterest.id);
        setInterestList(updatedInterests); // Update local state
        dispatch({
          type: onboardingActions.SET_USERS_INTEREST,
          data: updatedInterests, // Update context with the new interest list
        });
      }
    };
  }

  /**
   * Checks if a given interest ID exists in the list.
   *
   * @param {String|Number} idToLookFor - The ID to search for.
   * @return {Boolean} True if the ID is found, false otherwise.
   */
  function hasId(idToLookFor) {
    let idFound = false;
    interestList.forEach((interest) => {
      if (interest.id == idToLookFor) {
        idFound = true;
      }
    });
    return idFound;
  }

  /**
   * Toggles the `selected` property for a given interest ID.
   *
   * @param {String|Number} idToUpdate - The ID of the interest to update.
   * @return {Array} The updated interest list.
   */
  function updateInterestList(idToUpdate) {
    // Create a deep copy of the interest list
    const newList = JSON.parse(JSON.stringify(interestList));
    newList.forEach((interest) => {
      if (interest.id == idToUpdate) {
        interest.selected = !interest.selected; // Toggle selection
      }
    });
    return newList;
  }

  return (
    <div className="flex flex-col gap-11">
      {/* Header section */}
      <div className="flex flex-col text-center">
        <div>
          <Typography type="p">ABOUT YOU</Typography>
          <Typography type="h3">Select Your Skills Below</Typography>
        </div>
        <Typography className="m-0" type="p">
          Select up to 5 skills that you want to showcase on your profile
        </Typography>
      </div>

      {/* Interest selection grid */}
      {/* <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-h-[308px] max-w-[650px] overflow-auto">
          {interestList.map((interest) => (
            <div
              key={interest.id} // Ensure a unique key for each interest
              className={`py-3 px-8 rounded-3xl cursor-pointer font-nunito-sans text-base border-2 border-neptune-700 
              ${
                interest.selected
                  ? 'bg-neptune-700 text-white' // Selected state styling
                  : 'bg-white text-neptune-700' // Unselected state styling
              }`}
              onClick={onSelectedInterest(interest)} // Handle selection toggle
            >
              {interest.name} // Display the interest name
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
