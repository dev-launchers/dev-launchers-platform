import {
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  X,
  Share,
} from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '..';

export interface ShareDialogProps {
  /*
   * The header of the dialog. For example, "Share this Idea" or "Project".
   */
  header: string;
  /*
   * The quote of the shared content. Defaults to the current page description.
   */
  quote?: string;
  /*
   * Adding a hashtag to shared content. Facebook #hastags.
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
 * Built from Dialog component, ShareDialog is a dialog that allows the user to share a link to a social media platform.
 * url, title, description, quote, and hashtag are all optional props that can be passed to the ShareDialog component. These optional props will be used to populate the social media share dialog with the provided information.
 * button prop is also optional and can be used to pass a custom button component to the ShareDialog component. If no button is passed, a default button will be used.
 * https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0
 */

export function ShareDialog({
  header,
  url = '',
  quote,
  hashtag,
  button,
}: ShareDialogProps) {
  const copyToClipboard = () => {
    alert('Link copied to clipboard!');
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {button ?? (
            <Button
              buttonType="primary"
              buttonSize="standard"
              className="flex items-center justify-center gap-2"
            >
              <Share className="h-4 w-4" /> Share
            </Button>
          )}
        </DialogTrigger>

        <DialogContent
          className="px-8 pb-12 pt-4 shadow-md"
          hasCloseBtn={false}
        >
          <DialogHeader className="mx-0 mt-8 w-96 text-center md:mx-12">
            <Typography type="h3">
              <DialogTitle className="text-xl tracking-wider">
                {header}
              </DialogTitle>
            </Typography>
          </DialogHeader>
          <DialogClose className="absolute right-6 top-4 flex items-center justify-center rounded-md bg-white drop-shadow-xl md:right-8">
            <X className="h-6 w-6" />
          </DialogClose>

          <div className="flex w-80 items-center justify-center gap-4">
            <TwitterShareButton url={url}>
              <div className="flex h-10 w-10 items-center justify-center rounded shadow-lg">
                <Twitter className="h-8 w-8" />
              </div>
            </TwitterShareButton>

            <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
              <div className="flex h-10 w-10 items-center justify-center rounded shadow-lg">
                <Facebook className="h-8 w-8" />
              </div>
            </FacebookShareButton>

            <LinkedinShareButton url={url}>
              <div className="flex h-10 w-10 items-center justify-center rounded shadow-lg">
                <Linkedin className="h-8 w-8" />
              </div>
            </LinkedinShareButton>
          </div>
          <DialogFooter className="mt-9 flex w-80 flex-col items-center justify-end gap-4 font-nunito-sans">
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
