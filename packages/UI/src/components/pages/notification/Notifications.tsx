import Link from 'next/link';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Grid from '../../atoms/Grid/Grid';
import Tabs, { Trigger, Content } from '../../molecules/Tab/Tab';
import NotificationItem from '../../NotificationItem/NotificationItem';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationJump,
  PaginationLink,
} from '../../Pagination/Pagination';

const NotificationsStyles = tv({
  slots: {
    wrapper: 'col-span-full flex flex-col items-start gap-12',
    headerWrapper: 'flex flex-col items-end justify-center gap-6 self-stretch',
    header: 'flex flex-wrap items-end justify-between gap-y-8 self-stretch',
    headerName:
      'font-abel text-[40px] font-normal capitalize leading-normal text-grayscale-900',
    headerActions:
      'flex grow items-center justify-between gap-8 self-stretch sm:grow-0 sm:justify-normal',
    headerActionReadAll:
      'appearance-none text-right font-nunito-sans text-base font-normal text-neptune-600',
    headerSettings: 'flex items-center justify-center gap-2',
    headerSettingsText:
      'font-nunito-sans text-sm font-normal leading-normal text-grayscale-900',
    filtersContainer:
      'flex flex-wrap content-end items-end justify-between gap-y-6 self-stretch',
  },
  variants: {},
});
// TODO: CREATE ICON
const Cog = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
  >
    <path
      d="M14.7744 9.49493C14.652 9.35809 14.5845 9.18216 14.5845 9C14.5845 8.81784 14.652 8.64192 14.7744 8.50507L15.7516 7.42521C15.8593 7.30723 15.9261 7.15878 15.9426 7.00115C15.959 6.84353 15.9242 6.68483 15.8432 6.54783L14.3164 3.95319C14.2362 3.81635 14.114 3.70788 13.9673 3.64324C13.8206 3.57861 13.6569 3.56111 13.4995 3.59324L12.0643 3.8782C11.8817 3.91526 11.6916 3.88539 11.5299 3.79421C11.3681 3.70303 11.246 3.55685 11.1864 3.38326L10.7208 2.01095C10.6695 1.86201 10.572 1.73264 10.4418 1.64113C10.3117 1.54963 10.1556 1.50061 9.99552 1.50102H6.94191C6.77544 1.49248 6.6107 1.53771 6.47285 1.62979C6.335 1.72187 6.23162 1.85574 6.17851 2.01095L5.751 3.38326C5.69146 3.55685 5.56929 3.70303 5.40756 3.79421C5.24582 3.88539 5.05571 3.91526 4.87309 3.8782L3.39972 3.59324C3.25051 3.57252 3.0984 3.59565 2.96256 3.65971C2.82671 3.72376 2.71319 3.82588 2.63632 3.95319L1.10951 6.54783C1.02642 6.6833 0.989063 6.84111 1.00277 6.99869C1.01648 7.15627 1.08056 7.30556 1.18585 7.42521L2.15537 8.50507C2.27776 8.64192 2.34526 8.81784 2.34526 9C2.34526 9.18216 2.27776 9.35809 2.15537 9.49493L1.18585 10.5748C1.08056 10.6944 1.01648 10.8437 1.00277 11.0013C0.989063 11.1589 1.02642 11.3167 1.10951 11.4522L2.63632 14.0468C2.71655 14.1837 2.83871 14.2921 2.98538 14.3568C3.13206 14.4214 3.29576 14.4389 3.45316 14.4068L4.88836 14.1218C5.07098 14.0847 5.26109 14.1146 5.42282 14.2058C5.58456 14.297 5.70673 14.4431 5.76627 14.6167L6.23195 15.989C6.28506 16.1443 6.38844 16.2781 6.52629 16.3702C6.66413 16.4623 6.82888 16.5075 6.99535 16.499H10.049C10.209 16.4994 10.3651 16.4504 10.4953 16.3589C10.6254 16.2674 10.723 16.138 10.7742 15.989L11.2399 14.6167C11.2994 14.4431 11.4216 14.297 11.5833 14.2058C11.745 14.1146 11.9352 14.0847 12.1178 14.1218L13.553 14.4068C13.7104 14.4389 13.8741 14.4214 14.0208 14.3568C14.1674 14.2921 14.2896 14.1837 14.3698 14.0468L15.8966 11.4522C15.9777 11.3152 16.0125 11.1565 15.996 10.9988C15.9796 10.8412 15.9127 10.6928 15.805 10.5748L14.7744 9.49493ZM13.637 10.4998L14.2477 11.1747L13.2705 12.8395L12.3697 12.6595C11.8199 12.5491 11.2479 12.6408 10.7624 12.9173C10.2769 13.1938 9.91166 13.6357 9.73597 14.1593L9.44587 14.9992H7.49156L7.21673 14.1443C7.04104 13.6208 6.67577 13.1788 6.19027 12.9023C5.70476 12.6258 5.13281 12.5341 4.58299 12.6445L3.68218 12.8245L2.68976 11.1672L3.30048 10.4923C3.67604 10.0798 3.88367 9.54587 3.88367 8.9925C3.88367 8.43913 3.67604 7.90517 3.30048 7.4927L2.68976 6.8178L3.66691 5.16802L4.56773 5.348C5.11755 5.4584 5.68949 5.36665 6.175 5.09018C6.6605 4.81371 7.02577 4.37175 7.20147 3.8482L7.49156 3.00082H9.44587L9.73597 3.8557C9.91166 4.37925 10.2769 4.82121 10.7624 5.09768C11.2479 5.37415 11.8199 5.4659 12.3697 5.3555L13.2705 5.17552L14.2477 6.84029L13.637 7.5152C13.2656 7.92672 13.0606 8.45759 13.0606 9.0075C13.0606 9.55741 13.2656 10.0883 13.637 10.4998ZM8.46872 6.00041C7.86477 6.00041 7.27438 6.17633 6.77222 6.50593C6.27006 6.83553 5.87867 7.304 5.64755 7.85211C5.41643 8.40021 5.35595 9.00333 5.47378 9.58519C5.5916 10.1671 5.88243 10.7015 6.30949 11.121C6.73654 11.5405 7.28064 11.8262 7.87299 11.942C8.46533 12.0577 9.07931 11.9983 9.63728 11.7713C10.1953 11.5442 10.6722 11.1598 11.0077 10.6665C11.3432 10.1732 11.5223 9.59326 11.5223 9C11.5223 8.20446 11.2006 7.4415 10.6279 6.87897C10.0553 6.31644 9.27858 6.00041 8.46872 6.00041ZM8.46872 10.4998C8.16674 10.4998 7.87155 10.4118 7.62047 10.247C7.36939 10.0822 7.17369 9.848 7.05813 9.57395C6.94257 9.2999 6.91233 8.99834 6.97125 8.70741C7.03016 8.41647 7.17557 8.14923 7.3891 7.93948C7.60263 7.72973 7.87468 7.58689 8.17085 7.52902C8.46702 7.47115 8.77401 7.50085 9.053 7.61437C9.33199 7.72789 9.57044 7.92012 9.73821 8.16676C9.90598 8.4134 9.99552 8.70337 9.99552 9C9.99552 9.39777 9.83466 9.77925 9.54833 10.0605C9.262 10.3418 8.87365 10.4998 8.46872 10.4998Z"
      fill="black"
    />
  </svg>
);

type NotificationsProps = VariantProps<typeof NotificationsStyles>;

const Notifications = ({}: NotificationsProps) => {
  const {
    wrapper,
    headerWrapper,
    header,
    headerActions,
    headerActionReadAll,
    headerName,
    headerSettings,
    headerSettingsText,
    filtersContainer,
  } = NotificationsStyles();
  return (
    <Grid>
      <div className={wrapper()}>
        <div className={headerWrapper()}>
          <div className={header()}>
            <p className={headerName()}>Notifications</p>
            <div className={headerActions()}>
              <button className={headerActionReadAll()}>
                Mark all as read
              </button>
              <Link href="/somewhere">
                <a className={headerSettings()} href="/somewhere">
                  <Cog />
                  <span className={headerSettingsText()}>Settings</span>
                </a>
              </Link>
            </div>
          </div>
          <hr className="h-px self-stretch bg-grayscale-100" />
          <div className={filtersContainer()}>
            <Tabs
              className="grow"
              defaultValue="tab1"
              triggers={
                <div className="flex">
                  <Trigger className="grow" value="tab1">
                    Unread
                  </Trigger>
                  <Trigger className="grow" value="tab2">
                    Read
                  </Trigger>
                </div>
              }
            >
              <>
                <Content value="tab1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <NotificationItem
                      key={num}
                      action="commented on"
                      avatar={{
                        alt: 'Profile picture of Arthur Wells',
                        src: '/Person.svg',
                      }}
                      message="What you want to achieve through an online questionnaire is quality rather than quantity."
                      name="Arthur Wells"
                      profileLink="https://devlaunchers.org/users/me"
                      status="unRead"
                      target="DevSocials"
                      targetLink="https://devlaunchers.org/projects/DL-IdeaSpace"
                      timeStamp="P3Y6M4DT12H30M5S"
                    />
                  ))}
                </Content>
                <Content value="tab2">
                  {[1, 2, 3].map((num) => (
                    <NotificationItem
                      key={num}
                      action="commented on"
                      avatar={{
                        alt: 'Profile picture of Arthur Wells',
                        src: '/Person.svg',
                      }}
                      message="What you want to achieve through an online questionnaire is quality rather than quantity."
                      name="Arthur Wells"
                      profileLink="https://devlaunchers.org/users/me"
                      status="read"
                      target="DevSocials"
                      targetLink="https://devlaunchers.org/projects/DL-IdeaSpace"
                      timeStamp="P3Y6M4DT12H30M5S"
                    />
                  ))}
                </Content>
              </>
            </Tabs>
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <div className="flex gap-2">
              <PaginationItem>
                <PaginationJump destination="first" href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationJump destination="previous" href="#" />
              </PaginationItem>
            </div>
            <div className="flex gap-2">
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
            </div>
            <div className="flex gap-2">
              <PaginationItem>
                <PaginationJump destination="next" href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationJump destination="last" href="#" />
              </PaginationItem>
            </div>
          </PaginationContent>
        </Pagination>
      </div>
    </Grid>
  );
};

Notifications.displayName = 'Notifications';
export default Notifications;
