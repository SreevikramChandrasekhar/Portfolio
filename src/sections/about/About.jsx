import AboutImage from '../../assets/about.jpeg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                {/*<div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div> */}
                <p>
                I am a highly motivated and results-oriented software professional with a background in both Machine Learning and Software Development. My experience encompasses the complete software development lifecycle, from designing and developing systems to implementing, testing, and maintaining them. Known for my strong attention to detail, ability to meet project deadlines, and quick learning aptitude, I have consistently excelled in my academic and professional endeavors.
                </p>
                <p>
                Having successfully completed my Master's degree in Computer Science at Santa Clara University, I am now eager to leverage my educational foundation, analytical skills, and programming expertise to excel as a Software Professional.
                </p>
                <p>
                My technical skills include:
                </p>
                <p>
                Programming Languages- Java, Python, C/C++, Assembly Level Programming, Linux, Unix. 
                </p>
                <p>
                Web Development- HTML, CSS, JavaScript, React.js.
                </p>
                <p>
                Databases- SQL, MySQL, NoSQL.
                </p>
                <p>
                Other Technologies- AWS, Kubernetes, Docker, Spring Boot Framework, Qt Framework, JSON, REST API’s, Postman, SVN, Git, MATLAB.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About