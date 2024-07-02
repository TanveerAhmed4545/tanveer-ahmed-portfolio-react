import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Education from "../pages/Education/Education";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/Projects/ProjectDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/education",
          element: <Education/>,
        },
        {
          path: "/skills",
          element: <Skills/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/projectDetails/:id",
          element: <ProjectDetails />
        }
      ]
    },
  ]);

  export default router;