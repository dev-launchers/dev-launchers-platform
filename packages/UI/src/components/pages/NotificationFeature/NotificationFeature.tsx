import { useState } from 'react';
import BlueBell from '../../../assets/icons/BlueBell';
import Dropdown from '../../organisms/Dropdown';
import Navbar from '../../organisms/Navigation/Navigation';

export function Feature() {
  const [checkedOptions, setCheckedOptions] = useState<{
    [key: string]: boolean;
  }>({ Relevant: true });
  const [activeTab, setActiveTab] = useState<string>('all');
  const unselectedTabTailwind =
    'cursor-pointer flex py-3 px-0 w-[358px] justify-center items-center gap-2 flex-[1_0_0] self-stretch md:w-[291px]';
  const selectedTabTailwind =
    'cursor-pointer flex py-3 px-0 justify-center items-center gap-2 flex-[1_0_0] self-stretch outline-none border-b-2 border-b-[#3350E5] bg-[#f9f9f9]';

  const getCheckedOption = () => {
    for (const key in checkedOptions) {
      if (checkedOptions[key]) {
        return key; // This will return 'Relevant'
      }
    }
  };
  return (
    <>
      <div className="xl:px-[128px] mx-auto mt-8 grid w-full grid-cols-4 gap-4 px-4 md:mt-16 md:grid-cols-8 md:gap-6 md:p-0 lg:m-0 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="col-span-4 flex flex-col items-center justify-center gap-12 md:col-start-2 md:col-end-8 lg:col-span-12 lg:w-[1014px] lg:max-w-[1014px] lg:self-center lg:justify-self-center">
          <div className="flex flex-col items-end justify-center gap-6 self-stretch">
            <div className="flex flex-wrap content-end items-end justify-between gap-y-8 self-stretch">
              <h1 className="font-400 m-0 text-center font-abel font-[40px] capitalize leading-none text-gray-900">
                Notifications
              </h1>
              <div className="flex w-full items-center justify-between md:w-auto md:justify-normal md:gap-8">
                <button>
                  <h3 className="cursor-pointer text-right font-nunito-sans font-normal leading-6 text-[#3340e5]">
                    Mark all as read
                  </h3>
                </button>
                <div>
                  <button className="flex cursor-pointer items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                    >
                      <path
                        d="M15.2744 9.49493C15.152 9.35809 15.0845 9.18216 15.0845 9C15.0845 8.81784 15.152 8.64192 15.2744 8.50507L16.2516 7.42521C16.3593 7.30723 16.4261 7.15878 16.4426 7.00115C16.459 6.84353 16.4242 6.68483 16.3432 6.54783L14.8164 3.95319C14.7362 3.81635 14.614 3.70788 14.4673 3.64324C14.3206 3.57861 14.1569 3.56111 13.9995 3.59324L12.5643 3.8782C12.3817 3.91526 12.1916 3.88539 12.0299 3.79421C11.8681 3.70303 11.746 3.55685 11.6864 3.38326L11.2208 2.01095C11.1695 1.86201 11.072 1.73264 10.9418 1.64113C10.8117 1.54963 10.6556 1.50061 10.4955 1.50102H7.44191C7.27544 1.49248 7.1107 1.53771 6.97285 1.62979C6.835 1.72187 6.73162 1.85574 6.67851 2.01095L6.251 3.38326C6.19146 3.55685 6.06929 3.70303 5.90756 3.79421C5.74582 3.88539 5.55571 3.91526 5.37309 3.8782L3.89972 3.59324C3.75051 3.57252 3.5984 3.59565 3.46256 3.65971C3.32671 3.72376 3.21319 3.82588 3.13632 3.95319L1.60951 6.54783C1.52642 6.6833 1.48906 6.84111 1.50277 6.99869C1.51648 7.15627 1.58056 7.30556 1.68585 7.42521L2.65537 8.50507C2.77776 8.64192 2.84526 8.81784 2.84526 9C2.84526 9.18216 2.77776 9.35809 2.65537 9.49493L1.68585 10.5748C1.58056 10.6944 1.51648 10.8437 1.50277 11.0013C1.48906 11.1589 1.52642 11.3167 1.60951 11.4522L3.13632 14.0468C3.21655 14.1837 3.33871 14.2921 3.48538 14.3568C3.63206 14.4214 3.79576 14.4389 3.95316 14.4068L5.38836 14.1218C5.57098 14.0847 5.76109 14.1146 5.92282 14.2058C6.08456 14.297 6.20673 14.4431 6.26627 14.6167L6.73195 15.989C6.78506 16.1443 6.88844 16.2781 7.02629 16.3702C7.16413 16.4623 7.32888 16.5075 7.49535 16.499H10.549C10.709 16.4994 10.8651 16.4504 10.9953 16.3589C11.1254 16.2674 11.223 16.138 11.2742 15.989L11.7399 14.6167C11.7994 14.4431 11.9216 14.297 12.0833 14.2058C12.245 14.1146 12.4352 14.0847 12.6178 14.1218L14.053 14.4068C14.2104 14.4389 14.3741 14.4214 14.5208 14.3568C14.6674 14.2921 14.7896 14.1837 14.8698 14.0468L16.3966 11.4522C16.4777 11.3152 16.5125 11.1565 16.496 10.9988C16.4796 10.8412 16.4127 10.6928 16.305 10.5748L15.2744 9.49493ZM14.137 10.4998L14.7477 11.1747L13.7705 12.8395L12.8697 12.6595C12.3199 12.5491 11.7479 12.6408 11.2624 12.9173C10.7769 13.1938 10.4117 13.6357 10.236 14.1593L9.94587 14.9992H7.99156L7.71673 14.1443C7.54104 13.6208 7.17577 13.1788 6.69027 12.9023C6.20476 12.6258 5.63281 12.5341 5.08299 12.6445L4.18218 12.8245L3.18976 11.1672L3.80048 10.4923C4.17604 10.0798 4.38367 9.54587 4.38367 8.9925C4.38367 8.43913 4.17604 7.90517 3.80048 7.4927L3.18976 6.8178L4.16691 5.16802L5.06773 5.348C5.61755 5.4584 6.18949 5.36665 6.675 5.09018C7.1605 4.81371 7.52577 4.37175 7.70147 3.8482L7.99156 3.00082H9.94587L10.236 3.8557C10.4117 4.37925 10.7769 4.82121 11.2624 5.09768C11.7479 5.37415 12.3199 5.4659 12.8697 5.3555L13.7705 5.17552L14.7477 6.84029L14.137 7.5152C13.7656 7.92672 13.5606 8.45759 13.5606 9.0075C13.5606 9.55741 13.7656 10.0883 14.137 10.4998ZM8.96872 6.00041C8.36477 6.00041 7.77438 6.17633 7.27222 6.50593C6.77006 6.83553 6.37867 7.304 6.14755 7.85211C5.91643 8.40021 5.85595 9.00333 5.97378 9.58519C6.0916 10.1671 6.38243 10.7015 6.80949 11.121C7.23654 11.5405 7.78064 11.8262 8.37299 11.942C8.96533 12.0577 9.57931 11.9983 10.1373 11.7713C10.6953 11.5442 11.1722 11.1598 11.5077 10.6665C11.8432 10.1732 12.0223 9.59326 12.0223 9C12.0223 8.20446 11.7006 7.4415 11.1279 6.87897C10.5553 6.31644 9.77858 6.00041 8.96872 6.00041ZM8.96872 10.4998C8.66674 10.4998 8.37155 10.4118 8.12047 10.247C7.86939 10.0822 7.67369 9.848 7.55813 9.57395C7.44257 9.2999 7.41233 8.99834 7.47125 8.70741C7.53016 8.41647 7.67557 8.14923 7.8891 7.93948C8.10263 7.72973 8.37468 7.58689 8.67085 7.52902C8.96702 7.47115 9.27401 7.50085 9.553 7.61437C9.83199 7.72789 10.0704 7.92012 10.2382 8.16676C10.406 8.4134 10.4955 8.70337 10.4955 9C10.4955 9.39777 10.3347 9.77925 10.0483 10.0605C9.762 10.3418 9.37365 10.4998 8.96872 10.4998Z"
                        fill="black"
                      />
                    </svg>
                    <h3 className="font-[Inter] font-[14px] text-gray-900">
                      Settings
                    </h3>
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex  flex-wrap content-end items-end justify-between gap-y-6 self-stretch">
              <div className="flex h-[52px] w-full items-center justify-center md:w-[291px]">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`${
                    activeTab === 'all'
                      ? selectedTabTailwind
                      : unselectedTabTailwind
                  }`}
                >
                  <h3>All</h3>
                </button>
                <button
                  onClick={() => setActiveTab('unread')}
                  className={`${
                    activeTab === 'unread'
                      ? selectedTabTailwind
                      : unselectedTabTailwind
                  }`}
                >
                  <h3>Unread</h3>
                </button>
              </div>
              <div className="flex w-full items-center justify-between rounded-lg md:w-[216px] lg:w-[234px]">
                <Dropdown
                  color="light"
                  checked={checkedOptions}
                  options={[
                    {
                      disabled: false,
                      text: 'Relevant',
                    },
                    {
                      disabled: false,
                      text: 'Read',
                    },
                    {
                      disabled: false,
                      text: 'Most recent',
                    },
                  ]}
                  recieveValue={(value) => {
                    let newCheckedOption = 'Relevant'; // Default value
                    for (const key in value) {
                      if (value[key]) {
                        newCheckedOption = key;
                        break;
                      }
                    }
                    setCheckedOptions({ [newCheckedOption]: true });
                  }}
                  title={
                    checkedOptions ? `${getCheckedOption()}` : 'Select option'
                  }
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[11px] self-stretch px-0 py-8">
            <div>
              <BlueBell />
            </div>
            <h1 className="text-center font-abel font-[32px] leading-normal text-gray-900">
              No Notifications Yet
            </h1>
            <h4 className="w-[303px] text-center font-nunito-sans font-normal leading-7 text-[#7f7e7f]">
              When you get notifications, they’ll show up here
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default Feature;
