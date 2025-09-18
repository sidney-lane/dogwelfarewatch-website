import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import './Blog.css';

const BlogCard = ({ post }) => (
  <article className="blog-card">
    <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
    <div className="blog-content">
      <div className="blog-meta">
        <span className="blog-category">{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <button className="blog-read-more">Read Full Article →</button>
    </div>
  </article>
);

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="section">
        <h2 className="section-title">Latest News & Insights</h2>
        <p className="section-subtitle">Stay informed about our advocacy work, policy updates, and important developments in animal welfare.</p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="blog-cta">
          <h3>Subscribe to Our Updates</h3>
          <p>Stay informed about our latest investigations, policy developments, and advocacy successes. Join our community of animal welfare advocates.</p>
          <Link to="/contact" className="btn btn-primary">
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;