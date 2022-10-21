import React from "react";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { title, _id, total_view, author, rating, details, image_url } = news;

  return (
    <div>
      <Card className="">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              style={{
                height: "60px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
              src={author?.img}
              alt=""
              srcSet=""
            />
            <div>
              {author?.name}
              <br />
              {author?.published_date}
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />

          <Card.Text>
            {details.length > 200 ? (
              <>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <FaStar className="text-warning me-2" />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2" />
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
