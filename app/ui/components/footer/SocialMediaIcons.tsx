import Link from 'next/link';
import React from 'react';
import LinkedinIcon from './LinkedinIcon';
import FacebookIcon from './FacebookIcon';

const SocialMediaIcons = () => {
  return (
    <div className='flex gap-4 md:gap-6'>
      <Link
        href='https://www.facebook.com/profile.php?id=61554785497612'
        target='_blank'
      >
        <FacebookIcon />
      </Link>
      <Link href='https://www.linkedin.com/company/webyteam/' target='_blank'>
        <LinkedinIcon />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
