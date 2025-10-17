import React, { useState } from 'react';
import BlogCard from './BlogCard';
import blogsData from '../../data/blogsData';
import './BlogList.css';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogsData.map(blog => blog.category))];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.category === selectedCategory);

  return (
    <div className="blog-list-container">
      <div className="blog-list-hero">
        <h1 className="blog-list-title">Our Blogs</h1>
        <p className="blog-list-description">
          Insights, stories, and knowledge from the world of entrepreneurship and innovation
        </p>
      </div>

      <div className="blog-list-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`blog-filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-list-grid">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="blog-list-empty">
          <p>No blogs found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
