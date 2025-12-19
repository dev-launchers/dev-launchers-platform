import Image from 'next/image';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import { useState } from 'react';
import { ImagePreviewSVG } from './ImagePreview';
import { MessageCircle, ArrowBigUpDash } from 'lucide-react';

function IdeaCard({ idea }) {
  const urlPath = `/ideaspace/workshop/${idea.id}`;
  const [isHovered, setIsHovered] = useState(false);
  const daysAgo = () => {
    const update = new Date(idea.updatedAt);
    const now = new Date();
    const diffInDays = Math.floor((now - update) / (1000 * 60 * 60 * 24));
    if (diffInDays >= 1825) {
      return 'long time';
    } else if (diffInDays >= 730) {
      return Math.floor(diffInDays / 365) + ' years';
    } else if (diffInDays >= 365) {
      return '1 year';
    } else if (diffInDays >= 60) {
      return Math.floor(diffInDays / 30) + ' months';
    } else if (diffInDays >= 30) {
      return '1 month';
    } else if (diffInDays >= 14) {
      return Math.floor(diffInDays / 7) + ' weeks';
    } else if (diffInDays >= 7) {
      return '1 week';
    } else if (diffInDays > 1) {
      return Math.floor(diffInDays) + ' days';
    } else {
      return '1 day';
    }
  };
  return (
    <Link href={{ pathname: urlPath }}>
      <atoms.Box
        flexDirection="column"
        style={{
          border: '0.125rem solid rgba(71, 71, 71, 0.10)',
          borderRadius: '1rem',
          cursor: 'pointer',
          boxShadow: isHovered
            ? '0px 3px 9px 0px rgba(212, 194, 229, 0.80)'
            : 'none',
          height: '218px',
          width: '295px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full min-h-[120px] relative">
          {idea.ideaImage?.medium_url ? (
            <Image
              alt="idea_image"
              src={idea.ideaImage.medium_url}
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: '1rem 1rem 0rem 0rem',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              }}
            />
          ) : (
            <div className="w-full h-full bg-[#F6F6F6] rounded-t-2xl flex items-center justify-center">
              <ImagePreviewSVG />
            </div>
          )}
        </div>

        <atoms.Box
          flexDirection="column"
          alignItems="flex-start"
          className="p-5 pt-3 "
        >
          <atoms.Typography
            as="h4"
            leading="normal"
            size="body_base"
            textWeight="bold"
            variant="secondary"
            className="m-0"
          >
            {idea.ideaName}
          </atoms.Typography>

          <div className="flex flex-row  justify-between w-full mt-6">
            <atoms.Typography
              type="p"
              className="flex flex-row gap-2 items-center"
              style={{ fontSize: '16px', color: '#494949', fontWeight: '700' }}
            >
              <span className="flex flex-row gap-1 items-center">
                <MessageCircle size={18} /> {idea.comments?.length}
              </span>
              <span className="flex flex-row gap-1 items-center">
                <ArrowBigUpDash size={18} /> {idea.votes}
              </span>
            </atoms.Typography>
            <atoms.Typography
              type="p"
              style={{ fontSize: '16px', color: '#494949', fontWeight: '400' }}
            >
              {daysAgo()} ago
            </atoms.Typography>
          </div>
        </atoms.Box>
      </atoms.Box>
    </Link>
  );
}

export default IdeaCard;
