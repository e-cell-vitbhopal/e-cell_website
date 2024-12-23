import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="blog_page">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}