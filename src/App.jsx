import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState([]);

  const selectedImage = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setImage(imagesArray);
  };

  return (
    <>
      <h1>
        this is how preview multiple image using array method and useState
      </h1>
      <form>
        <label>
          <input
            type="file"
            multiple
            onChange={selectedImage}
            accept="image/png , image/jpeg, image/webp, image/jpg"
          />
        </label>
        <button>upload</button>
      </form>
      {image &&
        image.map((item, index) => (
          <>
            <div key={index}>
              <img
                src={item}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
              <button onClick={() => setImage(image.filter((e) => e !== item))}>
                delete
              </button>
            </div>
          </>
        ))}
    </>
  );
}

export default App;
