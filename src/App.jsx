import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";

function App() {
    const location = useLocation();

    // Paths where you DON'T want Header/Footer
    const noHeaderFooter = ["/signup", "/login"];

    const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

    return (
        <div className='flex flex-col flex-wrap justify-between min-h-screen w-full items-center bg-white'>
            {!hideHeaderFooter && <Header />}

            <div className="w-full flex-grow">
                <Outlet />
            </div>

            {!hideHeaderFooter && <Footer />}
        </div>
    );
}

export default App;
