import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Link as LinkIcon,
} from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  InstapaperShareButton,
} from 'next-share';
import { tv } from 'tailwind-variants';
import Button from '../atoms/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from './../Dialog';

const ShareDialogStyles = tv(
  {
    slots: {
      dialogHeader:
        'flex h-6 w-[360px] items-center justify-center font-nunito-sans text-xl uppercase tracking-wider',
      dialogFooter:
        'flex w-[320px] flex-col items-center justify-end gap-4 font-nunito-sans',
      dialogBody: 'flex w-[320px] items-center justify-evenly gap-4',
      shareBtn: 'flex h-10 w-10 items-center justify-center rounded shadow-lg',
    },
    variants: {
      screenPseudo: {
        md: {
          dialogHeader: 'w-[448px]',
        },
        lg: {},
        xl: {},
      },
    },
  },
  {
    responsiveVariants: ['md', 'lg', 'xl'],
  }
);

export interface ShareDialogProps {
  /*
   * The header of the dialog. For example, "Idea" or "Project".
   */
  header: string;
  /*
   * The title of the shared content. Defaults to the current page title.
   */
  title?: string;
  /*
   * The description of the shared content. Defaults to the current page description.
   */
  description?: string;
  /*
   * The quote of the shared content. Defaults to the current page description.
   */
  quote?: string;
  /*
   * The hashtag to share. Defaults to the current page hashtag.
   */
  hashtag?: string;
  /*
   * The URL to share. Defaults to the current URL.
   */
  url?: string;
  /*
   * The button to trigger the dialog.
   */
  button?: JSX.Element;
}
/*
 * https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0
 */

export function ShareDialog({
  title,
  header,
  url = '',
  quote,
  description,
  hashtag,
  button,
}: ShareDialogProps) {
  const { dialogHeader, dialogFooter, dialogBody, shareBtn } =
    ShareDialogStyles({
      screenPseudo: {
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      },
    });

  const copyToClipboard = () => {
    alert('Link copied to clipboard!');
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {button ?? (
            <Button buttonType="primary" buttonSize="standard">
              Share
            </Button>
          )}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <h3 className={dialogHeader()}>
              <DialogTitle>Share this {header}</DialogTitle>
            </h3>
          </DialogHeader>
          <div className={dialogBody()}>
            <TwitterShareButton url={url}>
              <div className={shareBtn()}>
                <Twitter className="h-8 w-8" />
              </div>
            </TwitterShareButton>

            <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
              <div className={shareBtn()}>
                <Facebook className="h-8 w-8" />
              </div>
            </FacebookShareButton>

            <InstapaperShareButton
              title={title}
              description={description}
              url={url}
              className={shareBtn()}
            >
              <div className={shareBtn()}>
                <Instagram className="h-8 w-8" />
              </div>
            </InstapaperShareButton>
            <LinkedinShareButton url={url}>
              <div className={shareBtn()}>
                <Linkedin className="h-8 w-8" />
              </div>
            </LinkedinShareButton>
          </div>
          <DialogFooter className={dialogFooter()}>
            <h3 className="ml-8 w-full uppercase">Share with a link</h3>
            <div className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-solid border-black px-4 py-2 text-GreyScale-grey">
              <button
                onClick={copyToClipboard}
                className="flex h-8 w-8 items-center justify-center rounded shadow-lg "
              >
                <LinkIcon className="h-6 w-6" />
              </button>
              {url}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
