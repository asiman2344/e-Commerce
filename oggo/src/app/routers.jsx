import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import SubCategory2 from '../components/subCategories/subCategory2.jsx';
import Advertisement from "../components/advertisement.jsx";
import CardInfo from '../components/cardInfo.jsx'

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "subCategory2/:itemName/:subItemName",
                element: <SubCategory2 />
            },
            {
                path: 'advertisement',
                element: <Advertisement />
            },
            {
                path: 'card',
                element: <CardInfo />
            }
        ]
    }
]);

export default BrowserRouter;