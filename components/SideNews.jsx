import React from "react";
import { Link } from "react-router-dom";
import "./SideNews.css"; 

const SideNews = () => {
  const stories = [
    {
      id: 1,
      title: "Erik ten Hag responds to Cristiano Ronaldo's Man Utd comments",
      image:
      "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      video: null,
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/One_Football_Logo_2021.png",
      sourceName: "OneFootball",
      time: "4 hours ago",
    },
    {
      id: 2,
      title: "Arteta signs new Arsenal contract with eyes set on major trophies",
      image: null,
      video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Arsenal_FC_logo.svg",
      sourceName: "Arsenal FC",
      time: "3 hours ago",
    },
    {
      id: 3,
      title: "New transfer targets for Manchester United",
      image:
      "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      video: null,
      sourceLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Manchester_United_FC_crest.svg",
      sourceName: "ManUtd",
      time: "2 hours ago",
    },
    {
      id: 4,
      title: "Liverpool's latest signing reveals new jersey",
      image: null,
      video: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      sourceLogo: "https://www.shutterstock.com/shutterstock/photos/1788950423/display_1500/stock-photo-liverpool-merseyside-uk-lfc-and-nike-collaboration-home-football-soccer-shirt-for-the-1788950423.jpg",
      sourceName: "Liverpool FC",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {stories.map((story) => (
          <div key={story.id} className="col-lg-3 col-md-6 mb-4">
            <div className="news-card">
              <Link to={`/news/${story.id}`}>
                <div className="thumbnail">
                  {story.video ? (
                    <video src={story.video} alt={story.title} controls />
                  ) : (
                    <img src={story.image} alt={story.title} />
                  )}
                </div>
                <h3 className="news-title">{story.title}</h3>
              </Link>
              <div className="news-meta">
                <img src={story.sourceLogo} alt={story.sourceName} className="source-logo" />
                <span>{story.sourceName}</span>
                <span className="news-time">{story.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNews;
