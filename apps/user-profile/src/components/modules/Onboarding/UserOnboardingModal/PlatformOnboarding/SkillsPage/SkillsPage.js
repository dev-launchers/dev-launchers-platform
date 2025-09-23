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

  // checks if dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // manages the skills that the user has selected
  const [chosenSkillList, setChosenSkillList] = useState([]);

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

  // thanks to David Jaja: https://www.freecodecamp.org/news/build-a-dynamic-dropdown-component/

  const Dropdown = (
    skillList,
    setIsDropdownOpen,
    isDropdownOpen,
    chosenSkillList,
    setChosenSkillList
  ) => {
    const toggleDropdown = () => {
      setIsDropdownOpen(true);
    };

    return (
      <div>
        <button className="px-4 w-full py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative">
          <span className="block">
            <FiChevronDown color="#635FC7" size={24} />
          </span>
          {/* Conditionally render the dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
              <ul className="flex flex-col p-2">
                {skillList.map((skill) => (
                  <li
                    key={skill.id}
                    className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200`}
                    onClick={() => handleChoose(skill)}
                  >
                    {chosenSkillList.includes(skill) && <FiCheck />}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </button>
      </div>
    );
  };

  function handleChoose(skill) {
    setChosenSkillList((prevList) => {
      // Check if the skill already exists in the list
      if (prevList.includes(skill)) {
        // If skill exists, remove it from the list
        const updatedList = prevList.filter((item) => item !== skill);
        return updatedList;
      } else {
        // If skill doesn't exist, add it to the list
        return [...prevList, skill];
      }
    });
  }

  function ChosenList({ chosenSkillList, setChosenSkillList }) {
    function handleRemove(id) {
      setChosenSkillList((chosenSkillList) =>
        chosenSkillList.filter((skill) => skill.id !== id)
      );
    }
    return (
      <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
        {/* <h2 className="px-2 my-3 font-bold">Assigned list:</h2> */}
        <div className="flex flex-wrap gap-4">
          {chosenSkillList?.map((skill, index) => (
            <div
              key={skill.id}
              className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200"
              onClick={() => handleRemove(skill.id)}
            >
              <span>{index + 1}.</span>
              <span>{skill.name}</span>
              <span className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full">
                <FaXmark />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
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

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-h-[308px] max-w-[650px] overflow-auto">
          <Dropdown
            skillList={skillList}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            chosenSkillList={chosenSkillList}
            setChosenSkillList={setChosenSkillList}
          />
          <ChosenList
            chosenSkillList={chosenSkillList}
            setChosenSkillList={setChosenSkillList}
          />
        </div>
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
