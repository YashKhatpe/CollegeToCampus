import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import JobListings from "./pages/JobListings";
import HomePage1 from "./pages/HomePage1";
import ResumeScanner1 from "./pages/ResumeScanner1";
import Resources from "./pages/Resources";
import Interaction from "./pages/Interaction";
import HomePage from "./pages/HomePage";
import Training from "./pages/Training";
import Interaction1 from "./pages/Interaction1";
import Training1 from "./pages/Training1";
import HomePage11 from "./pages/HomePage11";
import JobListings1 from "./pages/JobListings1";
import Resources1 from "./pages/Resources1";
import AIChat from "./pages/AIChat";
import ResumeScanner from "./pages/ResumeScanner1";
import VirtualMeet from "./pages/VirtualMeet";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage1":
        title = "";
        metaDescription = "";
        break;
      case "/resumescanner1":
        title = "";
        metaDescription = "";
        break;
      case "/resources":
        title = "";
        metaDescription = "";
        break;
      case "/interaction":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/training":
        title = "";
        metaDescription = "";
        break;
      case "/interaction1":
        title = "";
        metaDescription = "";
        break;
      case "/training1":
        title = "";
        metaDescription = "";
        break;
      case "/homepage2":
        title = "";
        metaDescription = "";
        break;
      case "/joblistings":
        title = "";
        metaDescription = "";
        break;
      case "/resources1":
        title = "";
        metaDescription = "";
        break;
      case "/aichat":
        title = "";
        metaDescription = "";
        break;
      case "/virtualmeet":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/resumescanner":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/joblisting" element={<JobListings />} />
      <Route path="/homepage1" element={<HomePage1 />} />
      <Route path="/resumescanner1" element={<ResumeScanner1 />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/interaction" element={<Interaction />} />
      <Route path="/training" element={<Training />} />
      <Route path="/interaction1" element={<Interaction1 />} />
      <Route path="/training1" element={<Training1 />} />
      <Route path="/homepage2" element={<HomePage11 />} />
      <Route path="/joblistings" element={<JobListings1 />} />
      <Route path="/resources1" element={<Resources1 />} />
      <Route path="/aichat" element={<AIChat />} />
      <Route path="/virtualmeet" element={<VirtualMeet />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/resumescanner" element={<ResumeScanner />} />
      <Route path="/nav" element={<Navbar />} />
    </Routes>
  );
}
export default App;
