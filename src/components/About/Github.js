import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="Satyam070"
          blockSize={isMobile ? 7 : 30}
          blockMargin={isMobile ? 3 : 10}
          color="#c084f5"
          fontSize={isMobile ? 9 : 20}
        />
      </div>
    </Row>
  );
}

export default Github;
