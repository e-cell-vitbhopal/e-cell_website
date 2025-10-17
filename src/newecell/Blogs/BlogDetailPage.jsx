import React from 'react';
import NewNav from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BlogDetail from './BlogDetail';
import './Blog.css';

const BlogDetailPage = () => {
  return (
    <div className="blog-page-wrapper">
      <NewNav />
      <main className="blog-page-main">
        <BlogDetail />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
