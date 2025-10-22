import { Edit } from 'lucide-react';
import Button from '@devlaunchers/components/src/components/atoms/Button/';

interface props {
  key: string;
  role: string;
  department: string;
  date: string;
  onEdit: (value: string) => void;
  onView: (value: string) => void;
}

export default function ActiveRole(props: props) {
  return (
    <div className="rounded-lg border border-[#A681CA] bg-[#3F1F5F66] p-8 ml-0">
      <div className="mb-3 flex items-center justify-between sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="self-start rounded-full border border-[#66CC6B] bg-[#1B501D] px-3 py-1 text-xs font-semibold">
          Active
        </span>
      </div>
      <h3 className="mb-2 text-base sm:text-lg font-semibold">{props.role}</h3>
      <p className="mb-1 text-sm">{props.department}</p>
      <p className="text-xs">Posted: {props.date}</p>
      <div className="mt-5 flex flex-col sm:flex-row justify-start gap-3 overflow-hidden">
        <Button onClick={() => props.onEdit?.(props.key)}>
          <Edit className="mr-1 h-4 w-4 sm:h-auto sm:w-auto" />
          <span className="text-xs sm:text-xs">Edit</span>
        </Button>
        <Button onClick={() => props.onView?.(props.key)}>
          <span className="text-xs sm:text-xs">View Applicants</span>
        </Button>
      </div>
    </div>
  );
}
