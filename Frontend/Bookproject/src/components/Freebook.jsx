import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../data/list.json";

function Freebook() {
  const freeBooks = list.filter(book => book.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="slider-container my-10 px-5">
      <Slider {...settings}>
        {freeBooks.map(book => (
          <div key={book.id} className="p-3">
            <div className="card bg-base-100 w-80 shadow-md">
              <figure>
                <img src={book.image} alt={book.name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.name}
                  <div className="badge badge-secondary">FREE</div>
                </h2>
                <p>{book.title}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Book</div>
                  <div className="badge badge-outline">{book.category}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
