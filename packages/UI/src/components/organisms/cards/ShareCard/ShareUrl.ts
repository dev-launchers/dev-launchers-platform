const shareUrl = (platform: string, ideaUrl: string, content?: string) => {
  const pageTitle = document.title;
  const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
  const twitterShareUrl = 'https://twitter.com/intent/tweet?text=';
  const mailShareUrl = `mailto:?&subject=${pageTitle}&cc=&bcc=&body=`;
  const linkedinShareUrl =
    'https://www.linkedin.com/shareArticle?mini=true&url=';
  const whatsAppShareUrl = 'https://web.whatsapp.com/send?text=';
  const redditShareUrl = `https://www.reddit.com/submit?title=${pageTitle}&url=`;

  switch (platform) {
    case 'facebook':
      return `${facebookShareUrl}${ideaUrl}`;
    case 'twitter':
      return `${twitterShareUrl}${content} ${ideaUrl}`;
    case 'mail':
      return `${mailShareUrl}${content} ${ideaUrl}`;
    case 'linkedin':
      return `${linkedinShareUrl}${ideaUrl}`;
    case 'whatsApp':
      return `${whatsAppShareUrl}${content} ${ideaUrl}`;
    case 'reddit':
      return `${redditShareUrl}${ideaUrl}`;
  }
};

const shareLink = (ideaUrl: string) => {
  navigator.clipboard.writeText(ideaUrl);
};

const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export { shareUrl, shareLink, timeout };
