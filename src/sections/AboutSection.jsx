import React from 'react';
import { CakeSlice, BadgeCheck, Store, Coffee } from 'lucide-react';
import { Section } from '../components/Section';
import { aboutContent, features } from '../constants/siteContent';

const featureIcons = [BadgeCheck, CakeSlice, Coffee, Store];

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About the bakery"
      title={aboutContent.title}
      description={aboutContent.description}
    >
      <div className="feature-grid">
        {features.map((feature, index) => {
          const Icon = featureIcons[index] ?? Store;

          return (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">
                <Icon size={22} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>

      <div className="story-grid">
        <div className="story-copy">
          <div className="section-subtitle">What customers come for</div>
          <h3>{aboutContent.storyTitle}</h3>
          <p>{aboutContent.storyCopy}</p>

          <div className="story-bullets">
            {aboutContent.bullets.map((bullet) => (
              <span key={bullet} className="story-bullet">
                {bullet}
              </span>
            ))}
          </div>
        </div>

        <div className="story-visual">
          <div className="story-image story-main" />
          <div className="story-side">
            <div className="story-image" />
            <div className="story-image" />
          </div>
        </div>
      </div>
    </Section>
  );
}