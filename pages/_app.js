import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import Navbar from "./components/Navbar";
import config from "../aws-exports";
Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
