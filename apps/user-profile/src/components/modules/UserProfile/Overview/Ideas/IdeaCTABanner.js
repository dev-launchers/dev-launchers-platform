import { atoms } from '@devlaunchers/components/src/components';
import { ChevronRight } from 'lucide-react';

const CTA_BACKGROUND_SVG = `<svg width="985" height="195" viewBox="0 0 985 195" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16734_21850)"><rect width="985" height="195" rx="4" fill="#394CAC"></rect><path d="M828.125 321.125C926.984 321.125 1007.12 240.984 1007.12 142.125C1007.12 43.266 926.984 -36.875 828.125 -36.875C729.266 -36.875 649.125 43.266 649.125 142.125C649.125 240.984 729.266 321.125 828.125 321.125Z" fill="white" fill-opacity="0.2"></path><path d="M1051.87 365.874L955.661 269.661M1007.12 142.125C1007.12 240.984 926.984 321.125 828.125 321.125C729.266 321.125 649.125 240.984 649.125 142.125C649.125 43.266 729.266 -36.875 828.125 -36.875C926.984 -36.875 1007.12 43.266 1007.12 142.125Z" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M608.833 339.167C675.844 339.167 730.167 284.844 730.167 217.833C730.167 150.823 675.844 96.5 608.833 96.5C541.823 96.5 487.5 150.823 487.5 217.833C487.5 284.844 541.823 339.167 608.833 339.167Z" fill="white" fill-opacity="0.2"></path><path d="M760.499 369.499L695.283 304.283M730.167 217.833C730.167 284.844 675.844 339.167 608.833 339.167C541.823 339.167 487.5 284.844 487.5 217.833C487.5 150.823 541.823 96.5 608.833 96.5C675.844 96.5 730.167 150.823 730.167 217.833Z" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_16734_21850"><rect width="985" height="195" rx="4" fill="white"></rect></clipPath></defs></svg>`;

const encodedBackgroundSvg = encodeURIComponent(CTA_BACKGROUND_SVG);

const backgroundStyle = {
  backgroundImage: `url("data:image/svg+xml;utf8,${encodedBackgroundSvg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function IdeaCTABanner() {
  return (
    <atoms.Box
      className="min-h-[195px] flex flex-col px-8 py-7 text-white rounded"
      style={backgroundStyle}
    >
      <atoms.Typography as="span" variant="secondary" size="micro_xs">
        Want to explore other ideas?
      </atoms.Typography>
      <atoms.Typography
        as="h2"
        variant="primary"
        size="xl2"
        className="w-[45%] m-0 py-5 "
      >
        Collaborate to foster and support innovative concepts
      </atoms.Typography>
      <atoms.Box className="flex items-center w-[170px]">
        <atoms.Button
          as="a"
          color="pure"
          href="/ideaspace/browse"
          icon={<ChevronRight size={20} />}
          iconPosition="right"
          mode="light"
          size="small"
          type="primary"
        >
          Browse Ideas
        </atoms.Button>
      </atoms.Box>
    </atoms.Box>
  );
}

export default IdeaCTABanner;
