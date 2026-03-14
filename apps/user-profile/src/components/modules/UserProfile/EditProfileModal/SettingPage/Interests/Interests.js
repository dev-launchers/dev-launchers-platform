import { useEffect, useMemo, useState } from 'react';
import { atoms } from '@devlaunchers/components/components';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { editProfileDataContext } from '../../../../../../context/EditProfileDataContext';
import { editProfileActions } from '../../../../../../state/actions';
import { agent } from '@devlaunchers/utility';

export default function Interests({ discardChanges }) {
  const { userData } = useUserDataContext();
  const { editProfileDispatch } = editProfileDataContext();

  const [allInterests, setAllInterests] = useState([]);
  const [interestList, setInterestList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModified, setIsModified] = useState(false);

  const selectedFromUser = useMemo(() => userData?.interests ?? [], [userData]);

  useEffect(() => {
    setLoading(true);

    agent.Interests.get()
      .then((items) => {
        const list = Array.isArray(items)
          ? items.map((x) => ({ id: x.id, ...x.attributes }))
          : [];

        setAllInterests(list);
      })
      .catch((e) => console.error('Fetch interests failed:', e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!allInterests.length) return;

    const selectedIds = new Set((selectedFromUser ?? []).map((x) => x.id));

    const merged = allInterests.map((x) => ({
      ...x,
      selected: selectedIds.has(x.id),
    }));

    setInterestList(merged);

    if (discardChanges) {
      setIsModified(false);
    }
  }, [allInterests, selectedFromUser, discardChanges]);

  useEffect(() => {
    if (!interestList.length) return;

    const selected = interestList.filter((i) => i.selected);

    editProfileDispatch({
      type: editProfileActions.SET_INTERESTS,
      payload: selected,
    });

    if (isModified) {
      editProfileDispatch({
        type: editProfileActions.MARK_INTERESTS_CHANGED,
      });
    }
  }, [interestList, isModified, editProfileDispatch]);

  const toggle = (id) => {
    setIsModified(true);
    setInterestList((prev) =>
      prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  };

  if (loading) return <div className="text-center">Loading interests...</div>;

  return (
    <div className="flex flex-col items-start gap-8">
      <div className="text-left">
        <atoms.Typography as="h3" textWeight="bold">
          Interests
        </atoms.Typography>
        <atoms.Typography textAlign="left" type="h3 ">
          Select Your Interests Below. We will use this to help you find
          projects that match your interests
        </atoms.Typography>
      </div>

      <div className="flex flex-wrap gap-4 w-full">
        {interestList.map((interest) => (
          <atoms.Button
            key={interest.id}
            type={interest.selected ? 'secondary' : 'primary'}
            mode="light"
            onClick={() => toggle(interest.id)}
            className={`
              inline-flex items-center justify-center gap-2
              px-5 py-2.5
              rounded-xl border
              whitespace-nowrap text-lg leading-none
              transition-all duration-200
              ${
                interest.selected
                  ? 'bg-[#D9D9D9] text-black'
                  : 'bg-transparent text-white'
              }
            `}
          >
            <span>{interest.interest ?? interest.name}</span>

            {interest.selected && (
              <span
                className="flex items-center justify-center w-4 h-4 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(interest.id);
                }}
              >
                <svg
                  viewBox="0 0 14 14"
                  className="w-4 h-4 fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6451 14.0026C12.4707 14.0031 12.2984 13.9701 12.1409 13.9061C11.9834 13.842 11.8446 13.7486 11.7347 13.6326L6.09754 7.63256C5.92588 7.45363 5.83203 7.22919 5.83203 6.99756C5.83203 6.76594 5.92588 6.5415 6.09754 6.36256L11.9331 0.362565C12.1312 0.158348 12.4159 0.0299235 12.7245 0.00554376C13.0332 -0.018836 13.3404 0.0628259 13.5788 0.232564C13.8171 0.402303 13.967 0.646214 13.9955 0.910641C14.0239 1.17507 13.9286 1.43835 13.7305 1.64256L8.51348 7.00256L13.5554 12.3626C13.6982 12.5093 13.7888 12.6881 13.8167 12.8776C13.8446 13.0672 13.8085 13.2596 13.7127 13.4321C13.6169 13.6047 13.4655 13.7501 13.2763 13.8512C13.0871 13.9523 12.868 14.0048 12.6451 14.0026Z" />
                  <path d="M1.35541 0C1.52977 -0.0005 1.70205 0.0325 1.85958 0.0966C2.01712 0.1606 2.15591 0.2540 2.26576 0.3701L7.90295 6.3701C8.07461 6.5490 8.16846 6.7734 8.16846 7.0051C8.16846 7.2367 8.07461 7.4611 7.90295 7.6401L2.06735 13.6401C1.86924 13.8443 1.58457 13.9727 1.27595 13.9971C0.967335 14.0215 0.660055 13.9398 0.421709 13.7701C0.183363 13.6003 0.0334778 13.3564 0.0050231 13.092C-0.0234307 12.8276 0.0718786 12.5643 0.269983 12.3601L5.48701 7.0001L0.445053 1.6401C0.302334 1.4933 0.211676 1.3145 0.183805 1.1250C0.155935 0.9354 0.192019 0.7430 0.287788 0.5705C0.383557 0.3980 0.535003 0.2525 0.724205 0.1515C0.913407 0.0504 1.13245 -0.0022 1.35541 0Z" />
                </svg>
              </span>
            )}
          </atoms.Button>
        ))}
      </div>
    </div>
  );
}
