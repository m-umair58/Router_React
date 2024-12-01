import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found...!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        incidunt, quibusdam optio perspiciatis quis dolore corrupti possimus
        repellendus ex numquam consequuntur laboriosam cum voluptatem saepe rem
        recusandae vel excepturi explicabo.
      </p>
      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  );
}
