import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Guide from './pages/guide/Guide'

// layouts
import RootLayout from './layouts/RootLayout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="guide" element={<Guide />} />

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App