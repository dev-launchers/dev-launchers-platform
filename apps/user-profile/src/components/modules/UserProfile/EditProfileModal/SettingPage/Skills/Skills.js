import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { atoms } from '@devlaunchers/components/src/components';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
function Skills() {
  const { editProfileDispatch } = editProfileDataContext();
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/interests?filters[category][$eq]=Skill&populate=*`,
      {
        withCredentials: true,
      }
    )
      .then(({ data }) => {
        const skills = Array.isArray(data?.data)
          ? data.data.map((x) => ({
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

  const toggle = (id) => {
    setAllSkills((prev) => {
      const updated = prev.map((s) =>
        s.id === id ? { ...s, selected: !s.selected } : s
      );

      editProfileDispatch({
        type: editProfileActions.SET_SKILLS,
        payload: updated.filter((x) => x.selected),
      });

      editProfileDispatch({
        type: editProfileActions.MARK_SKILLS_CHANGED,
      });

      return updated;
    });
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
