import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaTwitch, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Brand1 from '../../images/Brand1.png';
import Brand2 from '../../images/Brand2.png';



const RightSideNav = () => {
  return (
    <div>
      <h2>Right Side Nav</h2>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          Login with google <FcGoogle />
        </Button>
        <Button className="mb-2" variant="outline-secondary">
          Login with Github <BsGithub />
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>

        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook className="mr-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <BsWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Brand1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Brand2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Brand1}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
