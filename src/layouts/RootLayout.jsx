import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navbar/NavigationBar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div>
        <NavigationBar />
      
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}