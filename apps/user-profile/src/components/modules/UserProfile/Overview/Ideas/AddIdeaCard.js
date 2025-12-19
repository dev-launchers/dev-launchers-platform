import { Plus } from 'lucide-react';
import { atoms } from '@devlaunchers/components/src/components';
import { useRouter } from 'next/router';

function AddIdeaCard() {
  const router = useRouter();
  return (
    <atoms.Box
      className="w-[295px] h-[218px] rounded-lg flex flex-row items-center justify-center hover:cursor-pointer"
      style={{
        backgroundColor:
          'var(--btn-surface-brand-tertiary, rgba(212, 194, 229, 0.25))',
      }}
      onClick={() => {
        router.push('/ideaspace/submit');
      }}
    >
      <Plus size={18} />
      <atoms.Typography
        type="p"
        variant="secondary"
        style={{ fontSize: '16px' }}
        className="text-[#3F1F5F]"
      >
        New Idea
      </atoms.Typography>
    </atoms.Box>
  );
}

export default AddIdeaCard;
