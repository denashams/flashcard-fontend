import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./BlogsLayout.css";

export default function BlogsLayout() {
  return (
    <div className="blogs-layout">
      <div className="blogs-link-container">
        <Link to="blogs">
          <button>home</button>
        </Link>
        <Link to="blogs/blog/:id">
          <button>single</button>
        </Link>
        <Link to="blogs/write">
          <button>write</button>
        </Link>
        
      </div>
      <main>
        {/* the pages included in the route are added here */}
        <Outlet />
      </main>
    </div>
  );
}
