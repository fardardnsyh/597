// src/components/FeaturedStories.jsx
import React from "react";
import "./FeaturedStories.css"; // Ensure the path is correct

function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: "Breaking: Major Transfer Deal Sealed",
      description: "The star player has officially moved to a new club in a record-breaking deal.",
      image: "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      link: "/news/1",
      date: "08 Sept 2024",
    },
    {
      id: 2,
      title: "Matchday: A Thrilling Encounter Awaits",
      description: "Get ready for a thrilling matchday experience with all the excitement.",
      image: "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      link: "/news/2",
      date: "1 hr ago",
    }
  ];

  return (
    <div className="featured-stories-container">
      {stories.map((story) => (
        <div key={story.id} className="featured-card">
          <a href={story.link} className="featured-card-link">
            <div className="featured-card-image">
              <img src={story.image} alt={story.title} />
            </div>
            <div className="featured-card-content">
              <h2 className="featured-card-title">{story.title}</h2>
              <p className="featured-card-description">{story.description}</p>
              <div className="featured-card-footer">
                <span className="featured-card-date">{story.date}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default FeaturedStories;
