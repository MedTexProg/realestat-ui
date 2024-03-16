import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ListPage from "./routes/listePage/listPage.jsx";
import HomePage from "./routes/homePage/homePage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/list",
                    element: <ListPage/>
                },
                {
                    path: "/:id",
                    element: <SinglePage/>
                },
                {
                    path: "/list",
                    element: <ListPage/>
                },
            ],
        },
    ]);

    return (

        <RouterProvider router={router}/>
    )
}

export default App
