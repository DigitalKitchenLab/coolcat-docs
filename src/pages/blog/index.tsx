import blogIndex from 'blogIndex.json';
import blogIndexRecentRouteTree from 'blogIndexRecent.json';
import {ExternalLink} from 'components/ExternalLink';
import {Page} from 'components/Layout/Page';
import {Seo} from 'components/Seo';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Link from 'next/link';
import * as React from 'react';
import {getAuthor} from 'utils/getAuthor';
import {removeFromLast} from 'utils/removeFromLast';
import toCommaSeparatedList from 'utils/toCommaSeparatedList';

export default function Archive() {
  return (
    <div className="mx-auto max-w-5xl container px-4 sm:px-6 lg:px-8 pt-16">
      <Seo title={'CoolCat Blog'} />
      <header className="py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold">Blog</h1>
        </div>
        <p className="text-gray-40 text-2xl pt-2">
          The official CoolCat blog with updates, news, announcements, and
          release notes.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-40">
        {blogIndex.routes.map((post) => (
          <div key={post.path}>
            <h3 className="font-bold text-xl ">
              <Link href={removeFromLast(post.path, '.')}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <div className="flex items-center">
              <div>
                <p className="text-sm leading-5 text-link">
                  By{' '}
                  {toCommaSeparatedList(post.author, (author) => (
                    <ExternalLink
                      href={getAuthor(author).url}
                      className="font-bold betterhover:hover:underline">
                      <span>{getAuthor(author).name}</span>
                    </ExternalLink>
                  ))}
                </p>
                <div className="flex text-sm leading-5 text-gray-50">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), 'MMMM dd, yyyy')}
                  </time>
                  <span className="mx-1">·</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Archive.displayName = 'Archive';

Archive.appShell = function AppShell(props: {children: React.ReactNode}) {
  return <Page routeTree={blogIndexRecentRouteTree} {...props} />;
};
