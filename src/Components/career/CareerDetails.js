import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        repellat quibusdam maiores nulla voluptas possimus cum sit suscipit
        sunt! Rem quam quo id voluptatum animi sit, aperiam eius porro cum?
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);
  if(!res.ok){
    throw new Error("User with this id doesn't exists")
  }
  return res.json();
};
