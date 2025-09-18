import React from 'react';
import { galleryItems } from '../../data/galleryItems';
import './Gallery.css';

const GalleryItem = ({ item }) => (
  <div className="gallery-item">
    <img src={item.image} alt={item.title} />
    <div className="gallery-overlay">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="dog-gallery">
      <div className="section">
        <h2 className="section-title">Dogs We Advocate For</h2>
        <p className="section-subtitle">Every dog deserves compassionate care, proper treatment, and a chance at a happy life.</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;