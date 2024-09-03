import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/hardware group.jpg";
import projImg2 from "../assets/img/Software project.jpg";
import projImg3 from "../assets/img/Portfolio Project.PNG";
import TrackVisibility from "react-on-screen";
import 'animate.css';
export const Projects = () => {
    const projects = [
        {
            title: "Gesture control robot car with mechanical arm for an entertaining game (Group)",
            description: "First - Year Hardware Group Project Of my university. We develop a robot car and a mechanical arm was designed for an entertaining game. Car hand were controlled by gesture hand. Arduino used to make the game",
            imgUrl: projImg1,
        },
        {
            title: "Salon Appointment And Scheduling  System - StyleSync (Group)",
            description: "Second - Year Software Project, A System Includes Mobile App and two Web Apps for Salon owner, Customers and  System Admin to Scheduling/Managing Appointments.",
            imgUrl: projImg2,
        },
        {
            title: "Personal Portfolio (Individual)",
            description: "A responsive web application using React and Bootstrap",
            imgUrl: projImg3,
        },

    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>These Are my Individual and Group Projects  what I did in Past </p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActivityKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"  >
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Third</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) =>{
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
                        <Row>
                                {
                                    projects.map((project,index) =>{
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
                        <Tab.Pane eventKey="third">
                        <Row>
                                {
                                    projects.map((project,index) =>{
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
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg"></img>
        </section>


    )
}