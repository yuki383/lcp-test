import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";
import { Component4 } from "./components/component4";
import { Component5 } from "./components/component5";
import { Component6 } from "./components/component6";
import { Component7 } from "./components/component7";
import { Component8 } from "./components/component8";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/one",
    Component: Component1,
  },
  {
    path: "/two",
    Component: Component2,
  },
  {
    path: "/three",
    Component: Component3,
  },
  {
    path: "/four",
    Component: Component4,
  },
  {
    path: "/five",
    Component: Component5,
  },
  {
    path: "/six",
    Component: Component6
  },
  {
    path: "/seven",
    Component: Component7,
  },
  {
    path: "/eight",
    Component: Component8,
  }
]);

function Index() {
  return (
    <div>
      <div>
        <Link to="/one">One</Link>
      </div>
      <div>
        <Link to="/two">Two</Link>
      </div>
      <div>
        <Link to="/three">Three</Link>
      </div>
      <div>
        <Link to="/four">Four</Link>
      </div>
      <div>
        <Link to="/five">Five</Link>
      </div>
      <div>
        <Link to="/six">Six</Link>
      </div>
      <div>
        <Link to="/seven">Seven</Link>
      </div>
      <div>
        <Link to="/eight">Eight</Link>
      </div>
    </div>
  );
}

const App  = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
