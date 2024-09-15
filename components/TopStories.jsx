import React from "react";
import "./TopStories.css";
import { MdAccessTimeFilled } from "react-icons/md";

const TopStories = () => {
  const topStories = [
    {
      title: "Breaking: Major Transfer Deal Sealed",
      description:
        "The star player has officially moved to a new club in a record-breaking deal.",
      image:
        "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      link: "/news/1",
      date: "08 Sept 2024",
    },
    {
      title: "Matchday: A Thrilling Encounter Awaits",
      image:
        "https://assets.goal.com/images/v3/blt1df618eef7db85e7/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook(146).png?auto=webp&format=pjpg&width=640&quality=60",
      link: "/news/2",
      date: "1 hr ago",
    },
    {
      title: "Player of the Month Announced",
      image: "https://via.placeholder.com/300x200",
      link: "/news/3",
      date: "1 hr ago",
    },
    {
      title: "Player of the Month Announced",
      image: "https://via.placeholder.com/300x200",
      link: "/news/4",
      date: "1 hr ago",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-5">
            <img
              src={topStories[0].image}
              className="card-img-top"
              alt={topStories[0].title}
            />
            <div className="card-body">
              <h3 className="big-card-title">{topStories[0].title}</h3>
              <p className="card-text description">
                {topStories[0].description}
              </p>
              <div className="meta-text">
                <img
                  src="https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/3/1647627159464-blob"
                  alt="Source Logo"
                  className="source-logo"
                />
                <span className="source">90min</span>
                <span className="date">
                  {" "}
                  <MdAccessTimeFilled size={20} />
                  &nbsp;{topStories[0].date}
                </span>
              </div>
              <a
                href="/news/1"
                className="btn btn-custom btn-primary mt-2 float-right"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {topStories.slice(1).map((story, index) => (
            <div className="card mb-4 d-flex" key={index}>
              <div className="row g-0 align-items-center">
                {" "}
                {/* Ensure alignment */}
                <div className="col-5 col-sm-4">
                  <img
                    src={story.image}
                    className="img-fluid story-image"
                    alt={story.title}
                  />
                </div>
                <div className="col-7 col-sm-8 d-flex flex-column justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <div className="meta-text">
                <img
                  src="https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/3/1647627159464-blob"
                  alt="Source Logo"
                  className="source-logo"
                />
                <span className="source">90min</span>
                <span className="date">
                  {" "}
                  <MdAccessTimeFilled size={15} />
                  &nbsp;{story.date}
                </span>
              </div>
              
                    <a href={story.link} className="stretched-link"></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
