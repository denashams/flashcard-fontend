import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./DarsafzaarLayout.css"

export default function DarsafzaarLayout() {
  return (
    <div className="darsafzaar-layout">
        <div className="darsafzaar-link-container">


          <button>پادکست</button>
          <button>یادبرگ</button>
          <button>محتوای متنی</button>
          <Link to="darsafzaar-guide">
            <button>راهنمای درس‌افزار</button>
          </Link>
          <Link to="darsafzaar-home">
            <button>درباره درس‌افزارها</button>
          </Link>
        </div>
      <main>
        {/* the pages included in the route are added here */}
        <Outlet />
      </main>
    </div>
  );
}
