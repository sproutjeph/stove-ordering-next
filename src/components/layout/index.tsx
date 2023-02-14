import { Footer, Navbar, Overlay, Portal, Sidebar } from "@/components";
import { useAppSelector } from "../../store/hooks";
import { PageMeta } from "../../utils/types";
import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

const Layout = ({ children, meta: pageMeta }: Props) => {
  const meta = {
    title: "Stove Online Ordering page",
    description: "Brought to you By Stove",
    ...pageMeta,
  };
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto mt-16 mb-10 md:mt-[4.3rem] max-w-7xl">
        {children}
      </main>

      <Footer />
      <Portal>
        <Sidebar />
        {isSidebarOpen ? <Overlay /> : null}
      </Portal>
    </>
  );
};

export default Layout;
