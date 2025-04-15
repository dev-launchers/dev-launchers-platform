import { RotateCw } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';

interface props {
  key: string;
  role: string;
  department: string;
  date: string;
  onRepost: (value: string) => void;
  onView: (value: string) => void;
}

export default function ArchivedRole(props: props) {
  return (
    <div className="rounded-lg border border-[#49494940] bg-[#49494940] p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-[#B9B9B9] bg-[#1C1C1C] px-3 py-2 text-xs font-semibold">
          Archived
        </span>
      </div>
      <h3 className="mb-3 text-lg font-semibold">{props.role}</h3>
      <p className="mb-2 text-sm">{props.department}</p>
      <p className="text-xs">Archived: {props.date}</p>
      <div className="mt-5 flex justify-end space-x-3">
        <Button onClick={props.onRepost}>
          <RotateCw className="mr-1 h-5 w-5" />
          <span className="text-xs">Repost</span>
        </Button>
        <Button onClick={props.onView}>
          <span className="text-xs">View Posting</span>
        </Button>
      </div>
    </div>
  );
}
