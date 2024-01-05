import ImageZoom from "./ImageZoom";


export const ZoomTest = () => {
  

  return ( 
    <div className="w-[300px] h-[300px] relative">
          <ImageZoom imageLink={"https://www.w3schools.com/howto/img_girl.jpg"} scale={4} imageWidth="400px" imageHeight="400px" containerScale={1.5}/>

    </div>
  );
};
