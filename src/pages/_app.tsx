import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";
import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Loading } from "@/components";
import { store } from "@/store/store";
import Router from "next/router";
import "@/styles/globals.css";
import "@/styles/globals.css";
import "@/styles/Custom.css";
import { useState } from "react";

const queryClient = new QueryClient();
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  return (
    <>
      {loading && <Loading iconColor="blue" />}
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <main className={`${roboto.variable} font-sans h-screen`}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer />
            <ReactQueryDevtools />
          </main>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
