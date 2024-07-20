import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Image } from "react-bootstrap";
import hireTeam1 from "../assets/media/poster-img.png";
import hireTeamWebp1 from "../assets/media/poster-img.webp";
export default function (){
    const [isOpen, setOpen] = useState(false);
    return(   
    <div class="hire_your_team_video">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="rMWIhiYFsZU"
          onClose={() => setOpen(false)}
        />
        <div
          class="hire_your_team_video_wrapper"
          onClick={() => setOpen(true)}
        >
          <div class="hire_your_team_video-img bg-overlay">
            <picture class="bg-overlay__media">
              <source srcSet={hireTeamWebp1} type="image/webp" />
              <source srcSet={hireTeam1} type="image/png" />
              <Image src={hireTeam1.src} alt="footer" fluid />
            </picture>
          </div>
        </div>
      </div>);
}