import React, { useEffect, useRef } from 'react';

const RandomStats = () => {
  const iframeRef1 = useRef(null);
  const iframeRef2 = useRef(null);

  useEffect(() => {
    const handleResize = (event) => {
      if (event.data.appHeight && event.data.inst === 'b3e9a') {
        const container = iframeRef1.current;
        if (container) {
          container.style.height = `${parseInt(event.data.appHeight, 10)}px`;
        }
      } else if (event.data.appHeight && event.data.inst === 'b1ece') {
        const container = iframeRef2.current;
        if (container) {
          container.style.height = `${parseInt(event.data.appHeight, 10)}px`;
        }
      }
    };

    window.addEventListener('message', handleResize);

    return () => {
      window.removeEventListener('message', handleResize);
    };
  }, []);

  return (
    <div className="randomstatdiv">
      <h2 className="SideTopStoriesText">Daily Random Stats</h2>
      <div
        id="scoreaxis-widget-b3e9a"
        style={{
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.15)',
          borderStyle: 'solid',
          borderRadius: '8px',
          padding: '10px',
          background: '#999999',
          width: '96%',
        }}
      >
        <iframe
          ref={iframeRef1}
          id="Iframe"
          src="https://www.scoreaxis.com/widget/league-top-players/8?autoHeight=1&amp;bodyBackground=%23999999&amp;inst=b3e9a"
          style={{ width: '100%', border: 'none', transition: 'all 300ms ease' }}
        ></iframe>
      </div>

      <br />

      <div
        id="scoreaxis-widget-b1ece"
        style={{
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.15)',
          borderStyle: 'solid',
          borderRadius: '8px',
          padding: '10px',
          background: '#999999',
          width: '96%',
        }}
      >
        <iframe
          ref={iframeRef2}
          id="Iframe"
          src="https://www.scoreaxis.com/widget/team-info/18?autoHeight=1&amp;bodyBackground=%231119999&amp;inst=b1ece"
          style={{ width: '100%', border: 'none', transition: 'all 300ms ease' }}
        ></iframe>
      </div>
    </div>
  );
};

export default RandomStats;

