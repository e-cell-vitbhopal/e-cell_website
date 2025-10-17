import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import blogsData from '../../data/blogsData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-not-found">
          <h1>Blog Not Found</h1>
          <p>The blog you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/blog')} className="blog-detail-back-btn">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  return (
    <div className="blog-detail-container">
      <button onClick={() => navigate('/blog')} className="blog-detail-back-btn">
        <ArrowLeft size={20} />
        Back to Blogs
      </button>

      <article className="blog-detail-article">
        <div className="blog-detail-header">
          <div className="blog-detail-category">{blog.category}</div>
          <h1 className="blog-detail-title">{blog.title}</h1>
          
          <div className="blog-detail-meta">
            <div className="blog-detail-meta-item">
              <Calendar size={18} />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="blog-detail-meta-item">
              <User size={18} />
              <span>{blog.author}</span>
            </div>
            <div className="blog-detail-meta-item">
              <Clock size={18} />
              <span>{calculateReadTime(blog.content)} min read</span>
            </div>
          </div>
        </div>

        <div className="blog-detail-image-container">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>

        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="blog-detail-footer">
          <button onClick={() => navigate('/blog')} className="blog-detail-footer-btn">
            <ArrowLeft size={20} />
            View All Blogs
          </button>
        </div>
      </article>

      <div className="blog-detail-related">
        <h2 className="blog-detail-related-title">Related Posts</h2>
        <div className="blog-detail-related-grid">
          {blogsData
            .filter(b => b.id !== blog.id && b.category === blog.category)
            .slice(0, 3)
            .map((relatedBlog) => (
              <div 
                key={relatedBlog.id} 
                className="blog-detail-related-card"
                onClick={() => navigate(`/blog/${relatedBlog.id}`)}
              >
                <img src={relatedBlog.image} alt={relatedBlog.title} />
                <h3>{relatedBlog.title}</h3>
                <p>{formatDate(relatedBlog.date)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
