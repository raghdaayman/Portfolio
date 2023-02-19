import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mockup1 from "../../assets/img/mockups.jpg";
import mockup2 from "../../assets/img/mockup4.jpg";
import mockup3 from "../../assets/img/mockup5.jpg";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import "./style.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mockup3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Project</h2>
                <p>My name is Raghda ,I live in Palestine</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1st Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2nd Section </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3rd Section </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>My name is Raghda Al-Shaikh Ali</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My name is Raghda , I am Palestinian.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}