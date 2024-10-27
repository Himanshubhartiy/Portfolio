import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Video() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <video className="w-100 h-auto" controls>
            <source src="/video/kick.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
