import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";
import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/globals.css";
import "@/styles/Custom.css";

const queryClient = new QueryClient();
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <main className={`${roboto.variable} font-sans h-screen`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}
