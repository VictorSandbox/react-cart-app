import React, { useContext } from "react";
import { AppContext } from "../appContext";
import { getClass } from "../utils";
import Image from '../components/Image'

function Photos() {
  // get photos list
  const { allPhotos } = useContext(AppContext);

//   console.log(allPhotos)

  const imageElements = allPhotos.map((img, i) => {
      // console.log(i)
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });

  return (
    <main className="photos">
      {imageElements}
    </main>
  );
}

export default Photos;
