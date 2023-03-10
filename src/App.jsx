import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Guide from "./pages/guide/Guide";
import ContentCards from "./pages/flashcards-subpages/contentcards/ContentCards";
import ImageCards from "./pages/flashcards-subpages/imagecards/ImageCards";
import Podcast from "./pages/flashcards-subpages/podcast/Podcast";
import Signup from "./pages/login/Signup";

// layouts
import RootLayout from "./layouts/RootLayout";
// import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="guide" element={<Guide />} />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>


      <Route path="content-card" element={<ContentCards />} />
      <Route path="image-card" element={<ImageCards />} />
      <Route path="podcast" element={<Podcast />} />
    </Route>
      
      

      
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
