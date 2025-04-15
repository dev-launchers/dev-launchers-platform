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
    <div className="rounded-lg border border-[#A681CA] bg-[#3F1F5F66] p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-[#66CC6B] bg-[#1B501D] px-3 py-2 text-xs font-semibold">
          Active
        </span>
      </div>
      <h3 className="mb-3 text-lg font-semibold">{props.role}</h3>
      <p className="mb-2 text-sm">{props.department}</p>
      <p className="text-xs">Posted: {props.date}</p>
      <div className="mt-5 flex justify-end space-x-3">
        <Button onClick={() => props.onEdit(props.key)}>
          <Edit className="mr-1 h-5 w-5" />
          <span className="text-xs">Edit</span>
        </Button>
        <Button onClick={() => props.onView(props.key)}>
          <span className="text-xs">View Applicants</span>
        </Button>
      </div>
    </div>
  );
}
