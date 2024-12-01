import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

  let currentlink = "";

  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map((crumb) => {
      currentlink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
            <Link to={currentlink}>{crumb}</Link>
        </div>
      )
    });
  return(
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}
