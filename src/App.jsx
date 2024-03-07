import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import DarsafzaarLayout from "./layouts/DarsafzaarLayout";

// pages
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import DarsafzaarHome from "./pages/projects/darsafzaar/darsafzaar-home/DarsafzaarHome";
import DarsafzaarGuide from "./pages/projects/darsafzaar/darsafzaar-guide/DarsafzaarGuide";
import ComingSoon from "./pages/coming-soon/ComingSoon";
import ImageCardsHome from "./pages/projects/darsafzaar/darsafzaar-imagecards/ImageCardsHome";
import BlogsHome from "./pages/blogs/BlogsHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="blogs" element={<BlogsHome />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="image-card-home" element={<ImageCardsHome />} />
      <Route element={<DarsafzaarLayout />}>
        <Route path="darsafzaar-home" element={<DarsafzaarHome />} />
        <Route path="darsafzaar-guide" element={<DarsafzaarGuide />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />\{" "}
    </div>
  );
}

export default App;
