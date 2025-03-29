import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
      <GoogleAnalytics gaId="G-MFNS9LFWL9" />
      <Footer />
    </>
  );
};

export default Layout;
