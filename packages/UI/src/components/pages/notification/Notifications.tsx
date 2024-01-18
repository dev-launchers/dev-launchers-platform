import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Grid from '../../atoms/Grid/Grid';

const NotificationsStyles = tv({
  slots: {
    wrapper: 'flex flex-col items-start gap-12 col-span-1',
    headerWrapper: 'flex flex-col items-end justify-center gap-6 self-stretch',
    header: 'flex items-end justify-between self-stretch',
    headerName:
      'font-abel text-[40px] font-normal capitalize leading-normal text-grayscale-900',
    headerActions: 'flex items-center gap-8',
    headerActionReadAll:
      'appearance-none text-right font-nunito-sans text-base font-normal text-neptune-600',
  },
  variants: {},
});

type NotificationsProps = VariantProps<typeof NotificationsStyles>;

const Notifications = ({}: NotificationsProps) => {
  const {
    wrapper,
    headerWrapper,
    header,
    headerActions,
    headerActionReadAll,
    headerName,
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
            </div>
          </div>
          <hr />
          <div></div>
        </div>
        <div></div>
      </div>
    </Grid>
  );
};

Notifications.displayName = 'Notifications';
export default Notifications;
