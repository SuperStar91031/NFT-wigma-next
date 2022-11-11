import React, { FC } from "react";
import Head from "next/head";
import ErrorBoundary from "components/errorBoundary";

type MainLayoutProps = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>NFTLaunchKit</title>
        <meta name="description" content="NFTLaunchKit description!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};

export default MainLayout;
