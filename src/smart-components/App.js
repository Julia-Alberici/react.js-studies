import PhotosGallery from "./components/Gallery";

function App() {
  const photos = [
    "https://picsum.photos/id/0/200",
    "https://picsum.photos/id/1/200",
    "https://picsum.photos/id/10/200",
    "https://picsum.photos/id/100/200",
    "https://picsum.photos/id/1000/200",
  ];

  return <PhotosGallery photos={photos} />;
}

export default App;
