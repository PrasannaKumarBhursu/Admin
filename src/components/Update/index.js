import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Update = ({ isOpen, closeModal, course, handleUpdate }) => {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);
  const [published, setPublished] = useState(course.published);
  const [imageLink, setImageLink] = useState(course.imageLink);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can call the handleUpdate function and pass the updated course data
    const updatedCourse = {
      ...course,
      title,
      description,
      price,
      published,
      imageLink, // Include the imageLink in the updated course data
    };
    handleUpdate(updatedCourse);
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Update Course</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title:</label>
                <InputField
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <InputField
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <InputField
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="imageLink">Image Link:</label>
                <InputField
                  type="text"
                  value={imageLink}
                  onChange={(e) => setImageLink(e.target.value)}
                />
              </div>
              <div>
                <label>
                  Published:
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                  />
                </label>
              </div>
              <Button type="submit">Update</Button>
              <Button onClick={closeModal}>Cancel</Button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Update;
