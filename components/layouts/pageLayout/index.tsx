import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../header";
import Footer from "../footer";

type PageLayoutProps = {
  fetching?: boolean;
  title?: string;
  isProtected?: boolean;
  children?: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ fetching, title, isProtected, children }) => {
  const router = useRouter();
  useEffect(() => {
    if (isProtected) {
      router.push("/");
    }
  }, [isProtected]);

  return (
    <div>
      <Header />
      <div className="flex">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
