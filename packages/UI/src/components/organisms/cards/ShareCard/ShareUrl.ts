const createShareUrl = (platform: string, ideaUrl: string) => {
  const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=";
  const twitterShareUrl = "https://twitter.com/intent/tweet?url=";
  const instagramShareUrl = "https://pinterest.com/pin/create/button/?url=";
  const linkedinShareUrl = "https://www.linkedin.com/shareArticle?mini=true&url=";

  switch (platform) {
    case 'twitter':
      return `${twitterShareUrl}${ideaUrl}`;
    case 'facebook':
      return `${facebookShareUrl}${ideaUrl}`;
    case 'instagram':
      return `${instagramShareUrl}${ideaUrl}`;
    case 'linkedin':
      return `${linkedinShareUrl}${ideaUrl}`;
  }
}

const ShareIdea = (platform: string, ideaUrl: string) => {
  const shareUrl = createShareUrl(platform, ideaUrl);
  window.open(shareUrl, '', 'width=500,height=500');
};

export default ShareIdea;
