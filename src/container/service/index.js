import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import lines from "../../assets/images/singleportoflio/lines4.png";
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from "../../data/service";

const PersonalPortfolioService = () => {
  return (
    <div
      className="bg-grey section service-bg "
      style={{ backgroundImage: `url(${lines})` }}
    >
      <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
        <Container>
          <Row>
            <Col>
              <SectionTitle
                title={"Embrace all"}
                // content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam."}
              />
            </Col>
          </Row>

          <Row>
            <Service
              className={"mb-40 mb-xs-30"}
              title="Song meaning"
              content="'Embrace all’ is meant to open the listener’s imagination and invite them into an exploration of self-expression. The usage of non-routine instruments and spectacular melodies full of space are taking the listener into a new world of creativeness. It’s about the artist's sincerity in bringing out everything that’s trapped inside. This is from an intense period where Zorana was rethinking her life and needed to face past burdens she was still carrying. The creation of this song is a reflection of the process by which she pulled herself from the depression, anger, grief, and self-sabotage she was putting on herself. Becoming her own cheerleader, Zorana imagined her future self and what she would say if she saw her now. Her future self is happier and wiser and is able to send her positive affirmations to move on from that which was pulling her back. This image of a better self enabled her to create an outlet for new creativity and playfulness. To lift the veil of a heavy period of past trauma and look beyond it. This is why the song starts with uncertainty and emotional turmoil to later turns into a message of hope, light, and love.
                "
            />
            <div style={{ height: "20px" }}></div>

            <Service
              title="Music production & genre"
              content="Almost immediately the listener is brought into a unique and exciting universe. We are told a story that starts with a dark, slightly creepy sound and slowly turns into a hopeful song. The drumbeat acts as an anchor to guide us through the musical journey. The synths, the bass, the beautiful guitars, and the ethnic instruments create a wide range of unique and fascinating sounds. A space odyssey unfolds in the listener’s ears with more and more instruments joining the wall of sound. The droning arrangement is intertwined with delicate details to complete the soundscape. Only towards the final part of the track do we get any vocals. This serves as a surprise to keep a user engaged and acts as a crescendo towards the end. A few words that accurately sum up the experience: “Play around. Free your soul. Live in now. Embrace all. Our time has come.”.  It might not be the most upbeat track, but its powerful invocation of emotion combined with the many details warrants multiple replays. Milan’s production choices are a mixture of well-known and daring. Zorana might not be a very seasoned composer, but she brings a lot of souls and her inexperience allows her to avoid old-fashioned songwriting patterns. The track achieves its goal to explore music and its endless possibilities, but to truly understand the track plug in your headphones and just click play. The music will do the rest."
            />

            <Col md={12} className={"text-center"}>
              <div style={{ height: "50px" }}></div>
              <Service className="mt-80" title="Lyrics" />
              <p>
                Free your soul <br></br>
                Play around <br></br>
                Live in now <br></br>
                Embrace all <br></br>
                Our time has come
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PersonalPortfolioService;
