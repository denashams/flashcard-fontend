import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { graphcms, QUERY_SLUG_CATEGORIES } from "../Graphql/Queries";
import BlogsNavLinks from "./BlogsNavLinks";
export default function BlogHeader() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <header>
      <Link to="/blogs">Home</Link>
      <BlogsNavLinks categories={categories} />
    </header>
  );
}
