import { Typography } from '@devlaunchers/components/components/atoms';
import { FilledRocketLogo, FilledCross } from './../../../common/Icons';

function ModalHeader({ closeModal }) {
  return (
    <div className="flex justify-between items-center w-full h-16 px-6 py-4 bg-black">
      <div className="flex items-center gap-4">
        <FilledRocketLogo />
        <Typography variant="primary" className="text-white">
          Dev Launchers
        </Typography>
      </div>
      <div onClick={closeModal}>
        <FilledCross className="cursor-pointer border-1 border-white" />
      </div>
    </div>
  );
}

export default ModalHeader;
