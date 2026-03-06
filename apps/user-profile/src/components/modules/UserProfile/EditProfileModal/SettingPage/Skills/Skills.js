import React, { useEffect, useState } from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
import { agent } from '@devlaunchers/utility';

function Skills() {
  const { editProfileDispatch } = editProfileDataContext();
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModified, setIsModified] = useState(false);

  // fetch ALL skills
  useEffect(() => {
    setLoading(true);

    agent.Skills.get()
      .then((items) => {
        const skills = Array.isArray(items)
          ? items?.map((x) => ({
              id: x.id,
              ...x.attributes,
              selected: false,
            }))
          : [];

        setAllSkills(skills);
      })
      .catch((e) => console.error('Fetch skills failed:', e))
      .finally(() => setLoading(false));
  }, []);

  //  sync local state → global state
  useEffect(() => {
    if (!allSkills.length) return;

    const selected = allSkills.filter((s) => s.selected);

    editProfileDispatch({
      type: editProfileActions.SET_SKILLS,
      payload: selected,
    });

    if (isModified) {
      editProfileDispatch({
        type: editProfileActions.MARK_SKILLS_CHANGED,
      });
    }
  }, [allSkills, isModified, editProfileDispatch]);

  // only local update
  const toggle = (id) => {
    setIsModified(true);
    setAllSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  if (loading) return <div className="text-center">loading Skills...</div>;

  return (
    <div className="w-full">
      <atoms.Typography
        as="h2"
        className="w-full text-center text-2xl font-semibold"
      >
        Select Your Skills Below
      </atoms.Typography>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {allSkills?.map((skill) => (
          <atoms.Button
            key={skill.id}
            type="button"
            className={`py-3 px-8 rounded-3xl border-2 border-neptune-700 font-nunito-sans text-base
            ${
              skill.selected
                ? 'bg-neptune-700 text-white'
                : 'bg-white text-neptune-700'
            }
            `}
            onClick={() => toggle(skill.id)}
          >
            {skill.interest}
          </atoms.Button>
        ))}
      </div>
    </div>
  );
}

export default Skills;
