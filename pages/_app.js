import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default MyApp;
