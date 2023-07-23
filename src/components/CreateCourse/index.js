import React, { useState } from "react";
import Navbar from "../Navbar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Select,
  Button,
} from "./CreateCourseStyles";

const CreateCourse = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
    published: true,
  });

  const [{ Token }] = useCookies(["Token"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const callbackToken = (Message) => {
    console.log(Message);
    navigate("/");
  };

  const callBackData = (Data) => {
    Data.json().then(callbackToken);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3005/admin/courses", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    }).then(callBackData);

    console.log(courseData);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>Create Course</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Title:</Label>
            <Input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Description:</Label>
            <Textarea
              name="description"
              value={courseData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Price:</Label>
            <Input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Image Link:</Label>
            <Input
              type="text"
              name="imageLink"
              value={courseData.imageLink}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Published:</Label>
            <Select
              name="published"
              value={courseData.published}
              onChange={handleChange}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Select>
          </FormGroup>
          <Button type="submit">Create Course</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default CreateCourse;
