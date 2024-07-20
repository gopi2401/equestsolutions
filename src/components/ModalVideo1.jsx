import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../assets/css/component/About/WhoWeAre/WhoWeAre.scss";
import bgVideo from "../assets/media/poster-img.webp";
const BASE_URL = import.meta.env.BASE_URL;
export default function () {
  const [isOpen, setOpen] = useState(false);
  return (
    <div class="who_we_are_video mx-lg-5">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rMWIhiYFsZU"
        onClose={() => setOpen(false)}
      />
      <div class="who_we_are_video_wrapper" onClick={() => setOpen(true)}>
        <div
          class="who_we_are_video-img"
          style={{ backgroundImage: `url(${bgVideo.src})` }}
        ></div>
        <div class="who_we_are_video-play">
          <img src={BASE_URL + "/images/play.png"} alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  );
}
