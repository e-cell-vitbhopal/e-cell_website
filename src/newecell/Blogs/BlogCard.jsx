import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-card">
      <div className="blog-card-image-container">
        <img src={blog.image} alt={blog.title} className="blog-card-image" />
        <div className="blog-card-category">{blog.category}</div>
      </div>
      
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        
        <div className="blog-card-meta">
          <div className="blog-card-meta-item">
            <Calendar size={16} />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="blog-card-meta-item">
            <User size={16} />
            <span>{blog.author}</span>
          </div>
        </div>
        
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        
        <button className="blog-card-read-more" onClick={handleReadMore}>
          Read More
          <ArrowRight size={18} className="blog-card-arrow" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
