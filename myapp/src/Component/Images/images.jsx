import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeImage } from "../../Redux/slices/images.slice";

const Images = () => {
  
  const dispatch = useDispatch();

  const res = useSelector((res) => res);

  const { imagesSlice } = res;

  return (
  
  <>
  <div className="p-16">
    <div className="grid grid-cols-6 gap-4">
      {
        imagesSlice.map((item, index) => (
        <img onClick={() => dispatch(removeImage(index))} src={item} alt={item} key={index} width={400}/>
        ))
      }
    </div>
  </div>
  </>

);
};

export default Images;
