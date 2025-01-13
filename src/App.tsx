import Navbar from "./components/navbar";

import HeroBottom from "./components/herobottomblack";

import Hero2 from "./components/hero2";
import HeroBottomWhite from "./components/herobottomwhite";
import Services from "./components/services";
import Valeurs from "./components/valeurs";
import Equipe from "./components/equipe";
import MiseAjour from "./components/mise-a-jour";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="dark:bg-[#000000] overflow-hidden">
      <Navbar />
      <Hero2 />
      <div className="hidden dark:block">
        <HeroBottom />
      </div>
      <div className="block dark:hidden">
        <HeroBottomWhite />
      </div>
      <Services />
      <Valeurs />
      <Equipe />
      <MiseAjour />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
