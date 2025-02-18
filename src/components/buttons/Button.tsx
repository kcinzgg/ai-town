import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

export default function Button({
  children,
  imgUrl,
  href,
  onClick,
  title,
  className = '',
}: {
  children: React.ReactNode;
  imgUrl?: string;
  href?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
}) {
  return (
    <a
      className={clsx(
        'bg-brown-800 hover:bg-brown-700 text-white text-sm px-2 py-1 pointer-events-auto rounded',
        className,
      )}
      href={href}
      title={title}
      onClick={onClick}
    >
      {imgUrl && <img src={imgUrl} className="w-4 h-4" alt="" />}
      {children}
    </a>
  );
}
