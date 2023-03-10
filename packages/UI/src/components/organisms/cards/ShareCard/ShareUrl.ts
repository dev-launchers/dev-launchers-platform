const createShareUrl = (platform: string, ideaUrl: string) => {
  const pageTitle = document.title;
  const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
  const twitterShareUrl = 'https://twitter.com/intent/tweet?url=';
  const mailShareUrl = `mailto:?&subject=${pageTitle}&cc=&bcc=&body=`;
  const linkedinShareUrl =
    'https://www.linkedin.com/shareArticle?mini=true&url=';

  switch (platform) {
    case 'twitter':
      return `${twitterShareUrl}${ideaUrl}`;
    case 'facebook':
      return `${facebookShareUrl}${ideaUrl}`;
    case 'mail':
      return `${mailShareUrl}${ideaUrl}`;
    case 'linkedin':
      return `${linkedinShareUrl}${ideaUrl}`;
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

export { shareIdea, shareLink };
