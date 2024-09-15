import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "./newsData.js";
import "./TransferDeal.css";
import { MdAccessTimeFilled } from "react-icons/md";

const TransferDeal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchedArticle = newsData.find(
        (article) => article.id === parseInt(id)
      );

      if (fetchedArticle) {
        setArticle(fetchedArticle);
      } else {
        navigate("/404");
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [id, navigate]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hcb";
    script.innerHTML = `/*<!--*/
      if(!window.hcb_user){hcb_user={};} 
      (function(){
        var s=document.createElement("script"), 
        l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), 
        h="https://www.htmlcommentbox.com";
        s.setAttribute("type","text/javascript");
        s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%241gh94zbht3hy5YlOfec1W%2F"+"&opts=16798&num=10&ts=1726190351882");
        if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);
      })(); 
    /*-->*/`;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const currentUrl = window.location.href;

  return (
    <div className="news-article">
      <div className="article-header">
        <div className="article-meta">
          <img
            src="https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/3/1647627159464-blob"
            alt="Source Logo"
            className="source-logo"
          />
          <span className="source">90min</span>
          <span className="date">
            {" "}
            <MdAccessTimeFilled size={20} />
            &nbsp;{article.date}
          </span>
        </div>
        <h1 className="article-title">{article.title}</h1>
      </div>
      <div className="article-body">
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />
        <h1 className="article-subtitle">{article.subtitle}</h1>
        <div className="article-content">
          {article.description.map((item, index) => {
            if (item.type === "paragraph") {
              return <p key={index}>{item.content}</p>;
            } else if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="description-image"
                />
              );
            }
            return null;
          })}
        </div>
      </div>

   



      <div id="HCB_comment_box">
        <a href="http://www.htmlcommentbox.com">Comments</a> are loading...
      </div>
    </div>
  );
};

export default TransferDeal;
