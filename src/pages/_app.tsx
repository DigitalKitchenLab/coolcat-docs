import * as React from 'react';
import {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '@docsearch/css';
import '../styles/algolia.css';
import '../styles/index.css';

const EmptyAppShell = ({children}: {children: React.ReactNode}) => (
  <>{children}</>
);

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  let AppShell = (Component as any).appShell || EmptyAppShell;
  // In order to make sidebar scrolling between pages work as expected
  // we need to access the underlying MDX component.
  if ((Component as any).isMDXComponent) {
    AppShell = (Component as any)({}).props.originalType.appShell;
  }

  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
