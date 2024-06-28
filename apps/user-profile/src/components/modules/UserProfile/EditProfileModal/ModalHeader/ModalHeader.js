import rocket from "../../../../../../../../packages/UI/src/images/logo-monogram.png";
import closeIcon from "./../../../../../images/icons/filled-x-icon.svg";
import { Typography } from "@devlaunchers/components/components/atoms";

function ModalHeader() {
    return (
        <div>
            <div className="flex justify-between items-center h-16 px-6 py-4 bg-black">
                <div className="flex items-center gap-4">
                    <img src={rocket} className="w-10 h-10"></img>
                    <Typography type="h4" className="text-white">Dev Launchers</Typography>
                </div>
                <img src={closeIcon} className="w-5 h-5 text-white fill-white"></img>
            </div>
        </div>
    )
}

export default ModalHeader;