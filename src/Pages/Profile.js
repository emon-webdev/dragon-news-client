import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../contexts/AuthProvider";
const Profile = () => {
const {user} = useContext(AuthContext);
const [name, setName] = useState(user.displayName);
const photoURLRef = useRef(user.photoURL);


const handleSubmit = event => {
    event.preventDefault()
    console.log(name, photoURLRef.current)
}

const handleChange = (event) => {
    setName(event.target.value)
}

  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly type="email" defaultValue={user?.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={name} type="text"  placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text"  placeholder="Photo URL" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
