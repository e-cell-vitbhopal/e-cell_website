import React from 'react';
import NewNav from '../Navbar/Navbar';
import Footer from '../Footer/Footer2';
import BlogList from './BlogList';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
      {/* <NewNav /> */}
      <main className="blog-page-main">
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
