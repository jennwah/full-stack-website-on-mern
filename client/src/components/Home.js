import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { FcComments } from 'react-icons/fc';
import { HiDatabase } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineLink } from 'react-icons/ai';

const Home = () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, this is my first website!</h1>
          <p>
            This website {<CgWebsite/>} is built with <strong>M.E.R.N stack (MongoDB, Express, React & Node) </strong>and deployed to <strong>HerokuApp</strong>
          </p>
          <p>
            What this website does is that, it will collect your feedbacks {<FcComments />} (navigate to comments section) about me or anything, and save it into mongodb database {<HiDatabase />}, which i can view later. Make sure you dont say <em>nasty</em> stuff
          </p>
          <p>
            Also, if you wanna contact me, head over to contact section on the top and you will see a bunch of links {<AiOutlineLink />} available for you to reach out to me.
          </p>
          <p>
            Also, if you know somewhere nice to travel, head over to locations section and suggest a nice place for my vacation. U can see a list of vacations already suggested by other.
          </p>
          <p>
            Or, if you just wanna know me, click button below to see what I do.
          </p>
          <p>
            <Link to="/about">
             <Button variant="primary">About Me</Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  )
};

export default Home;