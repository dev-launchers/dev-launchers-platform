import { useEffect, useMemo, useState } from 'react';
import { Button, Typography } from '@devlaunchers/components/components/atoms';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
import { agent } from '@devlaunchers/utility';

export default function Interests() {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();

  const [allInterests, setAllInterests] = useState([]);
  const [interestList, setInterestList] = useState([]);
  const [loading, setLoading] = useState(false);

  // selected interests from logged-in user
  const selectedFromUser = useMemo(() => userData?.interests ?? [], [userData]);

  // fetch ALL interests
  useEffect(() => {
    setLoading(true);

    agent.Interests.get()
      .then((items) => {
        const list = Array.isArray(items)
          ? items?.map((x) => ({ id: x.id, ...x.attributes }))
          : [];

        setAllInterests(list ?? []);
      })
      .catch((e) => console.error('Fetch interests failed:', e))
      .finally(() => setLoading(false));
  }, []);

  // merge ALL + selected
  useEffect(() => {
    if (!allInterests.length) return;
    console.log('allInterests', allInterests);
    const selectedIds = new Set(selectedFromUser.map((x) => x.id));

    const merged = allInterests.map((x) => ({
      ...x,
      selected: selectedIds.has(x.id),
    }));

    setInterestList(merged);

    editProfileDispatch({
      type: editProfileActions.SET_INTERESTS,
      payload: merged.filter((i) => i.selected),
    });
  }, [allInterests, selectedFromUser, editProfileDispatch]);

  const toggle = (id) => {
    setInterestList((prev) => {
      const next = prev.map((i) =>
        i.id === id ? { ...i, selected: !i.selected } : i
      );

      const selected = next.filter((i) => i.selected);

      editProfileDispatch({
        type: editProfileActions.SET_INTERESTS,
        payload: selected,
      });

      editProfileDispatch({ type: editProfileActions.MARK_INTERESTS_CHANGED });

      return next;
    });
  };

  if (loading) return <div className="text-center">Loading interests...</div>;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <Typography textAlign="center" variant="secondary">
          ABOUT YOU
        </Typography>
        <Typography textAlign="center" type="h3" textweight="light">
          Select Your Interests Below
        </Typography>
        <Typography textAlign="center" className="m-0" variant="secondary">
          We’ll use this to help you find projects that match your needs
        </Typography>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 max-h-[308px] max-w-[650px] overflow-auto">
          {interestList.map((interest) => (
            <Button
              key={interest.id}
              type="button"
              className={`py-3 px-8 rounded-3xl border-2 border-neptune-700 font-nunito-sans text-base
                ${
                  interest.selected
                    ? 'bg-neptune-700 text-white'
                    : 'bg-white text-neptune-700'
                }`}
              onClick={() => toggle(interest.id)}
            >
              {interest.interest ?? interest.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
