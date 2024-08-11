import HeaderComponent from '../../Components/Header/Header'
import { Outlet } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';

function Layout() {
  return (
    <>
      <div><HeaderComponent /></div>
      <div className="">
        <Outlet/>
      </div>
      <div><Footer/></div>
    </>
  );
}
export default Layout;