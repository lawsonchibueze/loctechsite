import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Banner />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}