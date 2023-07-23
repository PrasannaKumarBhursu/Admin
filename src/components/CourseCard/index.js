import React, { useState } from "react";
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardButton,
} from "./CourseCardStyles";

import Update from "../Update";

const CourseCard = (props) => {
  const { deleteCourse } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { _id, title, description, price, published } = props.eachCourse;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteOne = () => {
    deleteCourse(_id);
  };

  const handleUpdate = (updatedCourse) => {
    // Handle the course update here
    console.log("Updated Course:", updatedCourse);
  };

  return (
    <CardWrapper>
      <CardImage
        src="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg"
        alt={title}
      />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>Price : ${price}</CardPrice>
      <CardButton onClick={openModal}>Update</CardButton>
      <CardButton onClick={deleteOne}>Delete</CardButton>
      <p>Published : {published ? "Yes" : "No"}</p>
      <Update
        isOpen={isModalOpen}
        closeModal={closeModal}
        course={props.eachCourse}
        handleUpdate={handleUpdate}
      />
    </CardWrapper>
  );
};

export default CourseCard;
