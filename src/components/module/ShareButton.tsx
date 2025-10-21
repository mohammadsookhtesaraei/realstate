'use client';

import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LuShare2 } from 'react-icons/lu';

const ShareButton = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <div className="shadow-form mb-5 flex cursor-pointer items-center justify-center rounded-lg p-2.5">
        <LuShare2 className="text-blue-main me-2.5 text-base" />
        <button className="hover:text-blue-main h-5 cursor-pointer border-none bg-none text-base text-gray-400 transition-all delay-75 ease-in">
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
