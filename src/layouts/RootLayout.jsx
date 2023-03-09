import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/navbar/NavigationBar";

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
        <NavigationBar />
        </header>
      <main>
      {/* the pages included in the route are added here */}
        <Outlet /> 
      </main>
      
      <Footer/>
    </div>
  );
}
