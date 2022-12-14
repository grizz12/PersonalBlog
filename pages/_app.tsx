import "../styles/global.css";
import { AppProps } from "next/app";
import { lazy, useEffect, useState } from "react";
import { Roboto } from "@next/font/google";
const Loading = lazy(() => import("../components/loading"));

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
