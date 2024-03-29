// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./page/Home";

function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routest} />;
}

export default App;
