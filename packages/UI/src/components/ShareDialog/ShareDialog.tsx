import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Twitch,
  Link as LinkIcon,
} from 'lucide-react';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  InstapaperShareButton,
} from 'next-share';

import Button from '../atoms/Button';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from './../Dialog';

export interface ShareDialogProps {
  header: string;
  // below are the props for the social media share buttons
  title?: string;
  description?: string;
  quote?: string;
  hashtag?: string;
  url?: string;
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
}: ShareDialogProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button buttonType="primary" buttonSize="standard">
            Share
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <h3 className="flex h-6 w-[320px] items-center justify-center font-nunito-sans text-xl uppercase tracking-wider md:w-[448px]">
              <DialogTitle>Share this {header}</DialogTitle>
            </h3>
          </DialogHeader>
          <div className="flex w-[320px] items-center justify-evenly gap-4">
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

            <InstapaperShareButton
              title={title}
              description={description}
              url={url}
              className="h-6 w-6 rounded-sm shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded shadow-lg">
                <Instagram className="h-8 w-8" />
              </div>
            </InstapaperShareButton>
            <LinkedinShareButton url={url}>
              <div className="flex h-10 w-10 items-center justify-center rounded shadow-lg">
                <Linkedin className="h-8 w-8" />
              </div>
            </LinkedinShareButton>
          </div>
          <DialogFooter className="flex w-[320px] flex-col items-center justify-end gap-4 font-nunito-sans">
            <h3 className="ml-4 w-full uppercase">Share with a link</h3>
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
