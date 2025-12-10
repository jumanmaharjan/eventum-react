import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.scss";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header/Header";
import PageTitleWrapper from "./Component/PageTitles/PageTitleWrapper";
import ScrollToTop from "./Component/ScrollToTop";
import Home from "./Pages/HomePart/Home";
import About from "./Pages/Aboutpage/About";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";
import EventList from "./Pages/EventsPage/EventList";
import EventDetail from "./Pages/EventsPage/Eventdetail";
import SpeakerList from "./Pages/SpeakerPage/SpeakerList";
import SpeakerDetail from "./Pages/SpeakerPage/SpeakerDeatil";
import FeatureDetail from "./Pages/FeaturePage/featuerDeatil";
import Feature from "./Pages/FeaturePage/Feature";
import Pricing from "./Pages/Pricing";
import Gallery from "./Pages/GalleryPage/Gallery";
import FaqPage from "./Pages/FaqPage/Faqpage";
import TestimonialPage from "./Pages/TestimonialPage/TestimonialPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ReservationPage from "./Pages/ReservationPage/ReservationPage";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ComingSoon from "./Pages/ComingSoon";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header /> <Footer />
            </>
          }
        >
          <Route element={<PageTitleWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="event-list" element={<EventList />} />
            <Route path="event-detail/:id" element={<EventDetail />} />
            <Route path="speaker" element={<SpeakerList />} />
            <Route path="speaker-detail/:id" element={<SpeakerDetail />} />
            <Route path="feature" element={<Feature />} />
            <Route path="feature-detail/:id" element={<FeatureDetail />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="testimonial" element={<TestimonialPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/reservation" element={<ReservationPage />} />

            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Route>
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* 404 Page (wildcard) without title */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
