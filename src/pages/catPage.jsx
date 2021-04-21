import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CatInfo from "../components/catInfo";

const CatPage = () => {
  const [breed, setBreed] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cats/${params.id}`)
      .then((res) => {
        setBreed(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="cat-page">
      {!isLoading ? (
        <>
          <CatInfo breed={breed} />
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default CatPage;
