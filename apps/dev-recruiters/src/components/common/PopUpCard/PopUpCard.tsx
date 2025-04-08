import { Button } from "@devlaunchers/components/src/components/atoms";
import { InteractionButton } from "@devlaunchers/components/src/components/molecules/InteractionButtons/StyledCommonComponents";
import { Archive, Pencil } from "lucide-react";

interface PopUpCardProps {
    jobRole: string;
    team: string;
    postedDate: string;
    icon: string;
    onArchive: () => void;
    onEdit: () => void;
    onViewApplicants: () => void;
}

export default function PopUpCard(props: PopUpCardProps) {
    return (
        <div className="max-w-[304px] rounded-lg shadow-lg p-4 m-4 flex flex-col gap-6 items-center text-center">
            <div className="flex justify-between w-full">
                <InteractionButton onClick={props.onArchive}>
                    <Archive />
                </InteractionButton>
                <InteractionButton onClick={props.onEdit}>
                    <div className="inline-flex gap-1">
                        <Pencil />
                        Edit
                    </div>
                </InteractionButton>
            </div>
            <img 
                src={props.icon} 
                alt="Role icon" 
                className="w-12 h-12 object-contain" 
            />
            <div>
            <h1 className="w-full max-w-[80%] text-wrap text-center mx-auto">{props.jobRole}</h1>
            <h5>{props.team}</h5>
            </div>
            <Button onClick={props.onViewApplicants}>
                View Applicants
            </Button>
            <div>
                <p className="text-sm text-gray-500">Posted: {props.postedDate}</p>
            </div>
        </div>
    );
}