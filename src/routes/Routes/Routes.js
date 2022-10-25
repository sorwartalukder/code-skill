import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import Main from "../../layout/Main";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])