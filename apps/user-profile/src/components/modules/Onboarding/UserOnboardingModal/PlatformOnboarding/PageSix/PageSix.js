import { useState, useEffect } from 'react';
import { useOnboardingDataContext } from '../../../../../../context/OnboardingDataContext';
import { onboardingActions } from '../../../../../../state/actions';
import { Typography } from '@devlaunchers/components/components/atoms';

export default function PageSix() {
  const { onboardingData, dispatch } = useOnboardingDataContext();
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    setSkillList(onboardingData?.user?.skill ?? []);
  }, [onboardingData?.user?.skill]);

  function onSelectedSkill(selectedSkill) {
    return () => {
      const updated = updateSkillList(selectedSkill.id);
      setSkillList(updated);
      dispatch({ type: onboardingActions.SET_USERS_SKIll, data: updated });
    };
  }

  function updateSkillList(idToUpdate) {
    // deep copy array
    const newList = JSON.parse(JSON.stringify(skillList));
    newList.forEach((skill) => {
      if (skill.id == idToUpdate) {
        skill.selected = !skill.selected;
      }
    });
    return newList;
  }

  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col text-center">
        <div>
          <Typography textAlign="center" variant="secondary">
            ABOUT YOU
          </Typography>
          <Typography textweight="light" textAlign="center" type="h3">
            Select Your Skills Below
          </Typography>
        </div>
        <Typography textAlign="center" className="m-0" variant="secondary">
          We’ll use this to help you find projects that match your needs
        </Typography>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-h-[308px] max-w-[650px] overflow-auto">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className={`py-3 px-8 rounded-3xl cursor-pointer font-nunito-sans text-base  border-2 border-neptune-700 
                ${
                  skill.selected
                    ? 'bg-neptune-700 text-white'
                    : 'bg-white text-neptune-700'
                }`}
              onClick={onSelectedSkill(skill)}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
