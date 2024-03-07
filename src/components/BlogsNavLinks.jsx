import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BlogsNavLinks({ categories }) {
  const { pathname } = useLocation();
  console.log(categories);
  return (
    <nav>
      <ul className="menu-lists">
        <Link to="/blogs">
          <li className="list">All</li>
        </Link>

        {categories?.map((category) => (
          <Link key={category.slug} to={`/posts/${category.slug}`}>
            <li className="list">{category.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
