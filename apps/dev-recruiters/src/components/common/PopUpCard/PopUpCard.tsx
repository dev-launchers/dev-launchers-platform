import { Button } from "@devlaunchers/components/src/components/atoms";
import { InteractionButton } from "@devlaunchers/components/src/components/molecules/InteractionButtons/StyledCommonComponents";

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
                <InteractionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                    </svg>
                </InteractionButton>
                <InteractionButton>
                    <div className="inline-flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                        <path d="m15 5 4 4"/>
                        </svg>
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