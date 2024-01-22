import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./room.css";
import { useState } from "react";

const Room = () => {
  const images = [
    "/Monsieur-de-North.jpg",
    "/Monsieur-de-North.jpg",
    "/Monsieur-de-North.jpg",
    "/b.jpeg",
    "/a.jpg",
    "/Monsieur-de-North.jpg",
    "/a.jpg",
    "/b.jpeg",
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [isInnerModalOpen, setInnerModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const closeInnerModal = () => {
    setInnerModalOpen(false);
    setCurrentImageIndex(index);
  };

  const handleImageClick = (index) => {
    setInnerModalOpen(true);
    setCurrentImageIndex(index);
    console.log(10, isInnerModalOpen);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };
  console.log(currentImageIndex);
  return (
    <div className="room">
      <div className="room-header">
        <h2 className="room-title">Deluxe Room</h2>
        <div className="room-links">
          <Link className="room-link" to="/">
            Home
          </Link>
          <Link className="room-link" to="/rooms">
            Rooms
          </Link>
        </div>
      </div>
      <div className="room-content">
        <div className="room-details">
          <div className="room-images">
            <img src={images[0]} alt="" />
            <p
              onClick={() => {
                setModalOpen(true);
              }}
              className="button"
            >
              <span>...</span>
            </p>
          </div>

          {isModalOpen && (
            <div className="modal">
              <p onClick={() => setModalOpen(false)}>
                <span>x</span>
              </p>

              {images.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  onClick={() => handleImageClick(index)}
                  key={index}
                />
              ))}
            </div>
          )}

          {isInnerModalOpen && (
            <div className="inner-modal">
              <p>x</p>
              <p onClick={handlePrevClick} className="modal-nav left">
                <span>&lt;</span>
              </p>
              <img src={images[currentImageIndex]} alt="" />
              <p onClick={handleNextClick} className="modal-nav right">
                <span>&gt;</span>
              </p>
            </div>
          )}
          <div className="room-info">
            <div className="room-price">
              <p>
                <big>$400</big>
                <small>/night</small>
              </p>
              <div className="room-ratings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <p className="room-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              totam accusantium optio molestias doloribus, asperiores
              perferendis cum aperiam consectetur illo cupiditate perspiciatis
              quibusdam magnam ducimus! Exercitationem alias voluptatem itaque
              necessitatibus illo minima? Porro, odio praesentium? Et
              voluptatem, perspiciatis cum nam ullam beatae repellat animi harum
              autem reiciendis unde explicabo, dignissimos iste labore dolore
              eius ducimus pariatur molestias dolores culpa, quia necessitatibus
              totam modi quas? Ab rerum ullam excepturi quos vero quam! Illum,
              sequi eaque? Deleniti, sequi dolore voluptates dolorem saepe eaque
              odit magni repellat veritatis quasi, consequatur corporis aliquid
              voluptatem et
            </p>
            <div className="room-features">
              <p>Features</p>
              <ul>
                <li>TV</li>
                <li>Wifi</li>
                <li>Air Conditioned</li>
                <li>Lovely View</li>
              </ul>
            </div>
            <p className="room-children">
              Children are very much welcome in our apartments. Note that
              children and pets incur an extra cost of $100 dollars each per
              night.
            </p>
            <button className="room-book-btn">Book this room</button>
          </div>
        </div>
        <div className="room-search">
          <form>
            <div className="room-form-group">
              <label htmlFor="room-destination">Destination</label>
              <input type="text" id="room-destination" value="Rome" />
            </div>
            <div className="room-form-group">
              <label htmlFor="room-check-in-date">Check-in date</label>
              <input
                type="text"
                id="room-check-in-date"
                placeholder="04/23/2034 to 29/45/2013"
              />
            </div>
            <div className="room-form-group">
              <label htmlFor="room-options">Options</label>
              <div className="room-options">
                <div className="room-form-group">
                  <label htmlFor="room-adults">Adults</label>
                  <input type="text" placeholder="1" />
                </div>
                <div className="room-form-group">
                  <label htmlFor="room-children">Children</label>
                  <input type="text" placeholder="0" />
                </div>
                <div className="room-form-group">
                  <label htmlFor="room-pets">Pets</label>
                  <input type="text" placeholder="0" />
                </div>
                <div className="room-form-group">
                  <label htmlFor="room-rooms">Rooms</label>
                  <select id="room-rooms">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="room-search-btn">
                Search
              </button>
            </div>
          </form>
          <div className="room-contact">
            <h4>If you need any help, contact us</h4>
            <p>0921345677</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
