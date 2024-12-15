import React from 'react';
import EditIdea from '../../modules/EditIdea/EditIdea';
import IconX from '../../../images/x.svg';

const EditDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-opacity-0 z-40" />
      )}

      <div
        className={`
          fixed bottom-0 right-0 z-50
          transform transition-transform duration-300
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
          w-full md:w-[640px] h-[664px]
          bg-white shadow-lg rounded-tl-[24px]
          flex flex-col
        `}
      >
        <div className="px-6 py-5 flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">Edit Idea</h2>
          <button
            onClick={onClose}
            className=" text-gray-500 hover:text-gray-800 font-bold"
          >
            <img src={IconX} alt="Close Icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 overflow-y-scroll bg-[#F4F0F9]">
          <EditIdea isEditOpen={isOpen} />
        </div>
        <div className="px-[24px] py-[20px] bg-white">
          <div className="flex flex-row gap-2 justify-end items-center">
            <button
              className="px-[18px] py-[12px] rounded-[6px] border-2 text-[#7339AC] border-[#7339AC]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="px-[18px] py-[12px] rounded-[6px] border-[#3F1F5F] border-2 text-white bg-[#7339AC]">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDrawer;
