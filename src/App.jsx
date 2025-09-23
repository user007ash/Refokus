import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Work from "./Components/Hero/Work.jsx";
import Stripes from "./Components/Stripes/Stripes.jsx";
import Products from "./Components/Products/Products.jsx";
import Marqees from "./Components/Marqees/Marqees.jsx";
import Cards from "./Components/Card/Cards.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const lenis = useLenis();

  return (
    <ReactLenis root>
      <div className='w-full min-h-screen font-["Satoshi_variable"] bg-zinc-900 text-white'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marqees />
        <Cards />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
