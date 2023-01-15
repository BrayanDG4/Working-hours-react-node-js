import {CardSection} from './components/CardSection';
import {MainSection} from "./components/MainSection";
import { NavBar } from "./components/NavBar";
import {GetStartedSection} from './components/GetStartedSection';

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <CardSection/>
      <GetStartedSection/>
    </>
  );
}

export default App;
