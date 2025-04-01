import React from 'react';
import './Demo.css';

interface DemoProps {
  title: string;
  description: string;
  videoUrl: string;
}

export const Demo: React.FC<DemoProps> = ({ title, description, videoUrl }) => {
  return (
    <section className="demo">
      <div className="demo__container">
        <h2 className="demo__title">{title}</h2>
        <p className="demo__description">{description}</p>
        <div className="demo__video-container">
          <video
            src={videoUrl}
            controls
            className="demo__video"
            preload="none"
          />
        </div>
      </div>
    </section>
  );
};
