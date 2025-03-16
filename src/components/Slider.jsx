// DEPENDENCIES
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slider = () => {
//   return (
//     <div className="w-[390px] max-w-full h-[300px] bg-orange text-2xl">
//       SLIDER
//     </div>
//   );
// };

// export default Slider;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-full h-[30px] flex justify-center absolute bottom-[-60px] -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer bg-orange rotate-180"
        onClick={onClick}
      >
        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.487 1.41089C14.3237 0.531982 15.6825 0.531982 16.5192 1.41089L29.3712 14.9109C30.208 15.7898 30.208 17.2171 29.3712 18.096C28.5345 18.975 27.1757 18.975 26.339 18.096L14.9998 6.18511L3.66054 18.089C2.82382 18.9679 1.46499 18.9679 0.628271 18.089C-0.208447 17.2101 -0.208447 15.7828 0.628271 14.9039L13.4803 1.40386L13.487 1.41089Z" fill="#34465C" />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-full h-[30px] flex justify-center absolute top-[-40px] left-1/2 -translate-x-1/2 cursor-pointer bg-orange"
        onClick={onClick}
      >
        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.487 1.41089C14.3237 0.531982 15.6825 0.531982 16.5192 1.41089L29.3712 14.9109C30.208 15.7898 30.208 17.2171 29.3712 18.096C28.5345 18.975 27.1757 18.975 26.339 18.096L14.9998 6.18511L3.66054 18.089C2.82382 18.9679 1.46499 18.9679 0.628271 18.089C-0.208447 17.2101 -0.208447 15.7828 0.628271 14.9039L13.4803 1.40386L13.487 1.41089Z" fill="#34465C" />
        </svg>
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="font-p-bold w-[390px] md:w-[476px] max-w-full h-[200px] text-sm md:text-md text-dark flex justify-center">
      <Slider {...settings}>
        <div className="bg-white h-[68px]">
          <div className="relative bg-sand h-[63px] flex items-center justify-center rounded-[10px]">
            <p className="text-center"> Menu Maker by Qwenta</p>
            <p className="absolute font-primary -rotate-90 right-[-10px] -translate-x-1/2">2025</p>
          </div>
        </div>
        <div className="bg-white h-[68px] ">
          <div className="relative bg-sand h-[63px] flex items-center justify-center rounded-[10px]">
            <p className="text-center"> Booki</p>
            <p className="absolute font-primary -rotate-90 right-[-10px] -translate-x-1/2">2025</p>
          </div>
        </div>
        <div className="bg-white h-[68px] ">
          <div className="relative bg-sand h-[63px] flex items-center justify-center rounded-[10px]">
            <p className="text-center"> Booki</p>
            <p className="absolute font-primary -rotate-90 right-[-10px] -translate-x-1/2">2025</p>
          </div>
        </div>




        {/* <div className="relative bg-sand h-[63px] flex items-center justify-center">
          <p className="text-center"> Booki</p>
          <p className="absolute font-primary w-fit -rotate-90 ">2024</p>
        </div> */}
        {/* <div className="px-[70px] text-center rounded-[10px] relative h-[63px] flex items-center justify-center bg-red">
              <h3 className="font-primary-bold text-lg">Booki</h3>
              <p className="absolute right-[10px] -rotate-90 z-20 font-primary text-lg text-blue">
                2025
              </p>
            </div> */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

































// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// import illustrationRabbit from "../assets/illustration-rabbit.png"



// const BookSlider = () => {
//   const settings = {
//     dots: false,            // Affiche les petits points de navigation
//     infinite: true,        // Permet un défilement infini
//     speed: 500,            // Vitesse de transition en ms
//     slidesToShow: 3,       // Nombre d'éléments visibles en même temps
//     slidesToScroll: 1,     // Nombre d'éléments défilés à chaque transition
//     autoplay: true,        // Active le défilement automatique
//     autoplaySpeed: 3000,   // Temps entre chaque slide en ms
//     arrows: true,          // Affiche les flèches de navigation
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={illustrationRabbit} alt="Slide 1" />
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/300" alt="Slide 2" />
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/300" alt="Slide 3" />
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/300" alt="Slide 4" />
//       </div>
//     </Slider>
//   );
// };

// export default BookSlider;
















