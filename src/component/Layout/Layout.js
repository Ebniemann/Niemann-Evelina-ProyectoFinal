import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <NavBar />
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
