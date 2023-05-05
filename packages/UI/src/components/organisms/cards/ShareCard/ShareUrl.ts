const createShareUrl = (platform: string, ideaUrl: string) => {
  const pageTitle = document.title;
  const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
  const twitterShareUrl = 'https://twitter.com/intent/tweet?text=';
  const mailShareUrl = `mailto:?&subject=${pageTitle}&cc=&bcc=&body=`;
  const linkedinShareUrl =
    'https://www.linkedin.com/shareArticle?mini=true&url=';
  const whatsAppShareUrl = 'https://web.whatsapp.com/send?text=';
  const redditShareUrl = `https://www.reddit.com/submit?title=${pageTitle}&url=`;

  switch (platform) {
    case 'twitter':
      return `${twitterShareUrl}${ideaUrl}`;
    case 'facebook':
      return `${facebookShareUrl}${ideaUrl}`;
    case 'mail':
      return `${mailShareUrl}${ideaUrl}`;
    case 'linkedin':
      return `${linkedinShareUrl}${ideaUrl}`;
    case 'whatsApp':
      return `${whatsAppShareUrl}${ideaUrl}`;
    case 'reddit':
      return `${redditShareUrl}${ideaUrl}`;
  }
};

const shareIdea = (platform: string, ideaUrl: string) => {
  const shareUrl = createShareUrl(platform, ideaUrl);

  if (platform === 'mail') {
    window.location.assign(shareUrl!);
  } else {
    window.open(shareUrl, '', 'width=500,height=500');
  }
};

const shareLink = (ideaUrl: string) => {
  navigator.clipboard.writeText(ideaUrl);
};

const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export { shareIdea, shareLink, timeout };
