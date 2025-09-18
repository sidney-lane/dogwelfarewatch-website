import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "New Transparency Requirements for Municipal Shelters",
    excerpt: "A breakthrough in accountability as three councils adopt comprehensive reporting standards for animal intake, medical care, and outcomes. Here's what changed and what it means for animal welfare.",
    category: "Policy Update",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=200&fit=crop",
    slug: "transparency-requirements-municipal-shelters"
  },
  {
    id: 2,
    title: "Success Story: Improving Shelter Medical Care Standards",
    excerpt: "How our advocacy work led to improved veterinary care protocols at a major municipal shelter, resulting in better health outcomes for over 500 animals per year.",
    category: "Case Study",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200&fit=crop",
    slug: "improving-shelter-medical-care"
  },
  {
    id: 3,
    title: "FOI Request Reveals Concerning Trends in Dog Seizures",
    excerpt: "Our analysis of freedom of information data shows significant variations in seizure procedures across councils, highlighting the need for standardized protocols and oversight.",
    category: "Investigation",
    date: "January 5, 2025",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=200&fit=crop",
    slug: "foi-request-dog-seizures"
  },
  {
    id: 4,
    title: "Know Your Rights: What to Do if Your Dog is Seized",
    excerpt: "A comprehensive guide for pet owners facing dog seizure proceedings, including legal rights, appeal processes, and resources for support during difficult situations.",
    category: "Guide",
    date: "December 28, 2024",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=200&fit=crop",
    slug: "know-your-rights-dog-seized"
  },
  {
    id: 5,
    title: "Data Analysis: Shelter Outcomes Across Metropolitan Councils",
    excerpt: "Our six-month study reveals significant disparities in adoption rates, euthanasia practices, and length of stay across different council-managed shelters in the region.",
    category: "Research",
    date: "December 20, 2024",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=200&fit=crop",
    slug: "shelter-outcomes-analysis"
  },
  {
    id: 6,
    title: "Building Partnerships: Working with Rescue Groups",
    excerpt: "How collaboration between councils, shelters, and rescue organizations can improve outcomes for animals while maintaining public safety and accountability standards.",
    category: "Community",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=200&fit=crop",
    slug: "building-partnerships-rescue-groups"
  }
];

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