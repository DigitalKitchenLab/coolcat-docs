import * as React from 'react';
import ButtonLink from 'components/ButtonLink';
import {IconNavArrow} from 'components/Icon/IconNavArrow';

interface YouWillLearnCardProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

function YouWillLearnCard({title, path, children}: YouWillLearnCardProps) {
  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
      className="bg-blue-900 dark:bg-slate-800 flex flex-col h-full shadow-inner justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3">
      <div>
        <h4 className="text-rose-500 dark:text-primary-dark font-bold text-2xl leading-tight">
          {title}
        </h4>
        <div className="my-4 text-white">{children}</div>
      </div>
      <div>
        <ButtonLink
          href={path}
          className="mt-1"
          type="primary"
          size="md"
          label={title}>
          Read More
          <IconNavArrow displayDirection="right" className="inline ml-1" />
        </ButtonLink>
      </div>
    </div>
  );
}

export default YouWillLearnCard;
