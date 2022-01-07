import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import PhotoUploader from "./components/photo_uploader/photo_uploader";
import ContactRoute from "./routes/contact_route";
import GalleryRoute from "./routes/gallery_route";
import ReviewsRoute from "./routes/reviews_route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryRoute />} />
        <Route path="/reviews" element={<ReviewsRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/photoUpload" element={<PhotoUploader />} />
      </Routes>
    </>
  );
}

export default App;
