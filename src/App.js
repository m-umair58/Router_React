import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//pages or components
import Home from "./Components/Home";
import About from "./Components/About";
import Faq from "./Components/help/Faq";
import Contact, { contactAction } from "./Components/help/Contact";
import Careers, { careersLoader } from "./Components/career/Careers";
import CareerDetails, { careerDetailsLoader } from "./Components/career/CareerDetails";
import CareerError from "./Components/career/CareerError";
import NotFound from "./Components/NotFound";


//layouts
import RootLayout from "./Layouts/rootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareerLayout from "./Layouts/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* Writing index is the same as path="/" */}
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="Contact" element={<Contact />} action={contactAction}/>
      </Route>
      <Route path="careers" element={<CareerLayout />}  errorElement={<CareerError/>}>
        <Route index element={<Careers />} loader={careersLoader} ></Route>
        <Route path=':id' element={<CareerDetails/>} loader={careerDetailsLoader}/>
      </Route>
      
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
