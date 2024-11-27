import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Contact from './Contact.js';
import './consola.css';
import image1 from '../dist/img/1.png';
import image2 from '../dist/img/2.png';
import image3 from '../dist/img/3.png';
import image4 from '../dist/img/4.png';
import image5 from '../dist/img/5.png';
import image6 from '../dist/img/6.png';
import image7 from '../dist/img/7.png';
import image8 from '../dist/img/8.png';
import image9 from '../dist/img/9.png';
import image10 from '../dist/img/10.png';
import image11 from '../dist/img/11.png';
import image12 from '../dist/img/12.png';
import image13 from '../dist/img/13.png';
import image14 from '../dist/img/14.png';
import image15 from '../dist/img/15.png';
import image16 from '../dist/img/16.png';
import image17 from '../dist/img/17.png';
import image17p from '../dist/img/17p.png';
import image11p from '../dist/img/11p.png';
import image11p2 from '../dist/img/11p2.png';
import image12p from '../dist/img/12p.png';
import image12p2 from '../dist/img/12p2.png';
import image13p from '../dist/img/13p.png';
import image13p2 from '../dist/img/13p2.png';
import image14p from '../dist/img/14p.png';
import image14p2 from '../dist/img/14p2.png';
import image15p from '../dist/img/15p.png';
import image15p2 from '../dist/img/15p2.png';
import image16p from '../dist/img/16p.png';
import image17pro from '../dist/img/17p.png';
import image18pro from '../dist/img/18p.png';
import image19pro from '../dist/img/19p.png';
import image20pro from '../dist/img/20p.png';
import image21pro from '../dist/img/21p.png';
import image22pro from '../dist/img/22p.png';
import image23pro from '../dist/img/23p.png';
import image24pro from '../dist/img/24p.png';
import image25pro from '../dist/img/25p.png';
import image26pro from '../dist/img/26p.png';
import image27pro from '../dist/img/27p.png';
import image28pro from '../dist/img/28p.png';
import image29pro from '../dist/img/29p.png';
import image30pro from '../dist/img/30p.png';
import image31pro from '../dist/img/31p.png';
import image32pro from '../dist/img/32p.png';
import image33pro from '../dist/img/33p.png';
import image34pro from '../dist/img/34p.png';
import image35pro from '../dist/img/35p.png';
import image36pro from '../dist/img/36p.png';
import image37pro from '../dist/img/37p.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faArtstation, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [proyectosVisibles, setProyectosVisibles] = useState(3); // Estado para controlar los proyectos visibles

  useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cargarMasProyectos = () => {
    setProyectosVisibles(proyectosVisibles + 3); // Incrementa los proyectos visibles de 3 en 3
  };

  // Array de proyectos (puedes agregar más proyectos o generarlos dinámicamente)
  const proyectos = [
    { id: 1, img: image11p, descripcion: 'This application works as an electronic commerce store, the tools used were the following:' ,link: 'https://ecommercemern-production.up.railway.app/form-1',gitlink: 'https://github.com/Maze000/ecommerceMern',elementos: ['React', 'Express', 'MongoDB', 'Node.js',, 'Stripe', 'JSON Web Token (JWT)'] },
    { id: 2, img: image12p, descripcion: 'Crud api rest developed on the Estherium blockchain network, the tools used were the following:', link: 'https://ecommercemern-production.up.railway.app/form-1' ,gitlink: 'https://github.com/Maze000/solidityBlockChain',elementos: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js','Node.js', 'Hardhat']},
    { id: 3, img: image13p, descripcion: 'Motion capture based video game engine, the tools used were the following:' , link: 'https://drive.google.com/file/d/1eR7bxubBCj2yLHpiYvsW-tFKk4Pqr1LU/view?usp=drive_link' ,gitlink: 'https://github.com/Maze000/ecommerceMern',elementos: ['OpenCV', 'Adobe AIR', 'Adobe Flash', 'Kinect SDK', 'ActionScript', 'C++']},
    { id: 4, img: image14p, descripcion: 'Portfolio developed in Nextjs, the tools used were the following:', link: 'https://nextportfolio-production.up.railway.app/'  ,gitlink: 'https://github.com/Maze000/nextPortfolio2',elementos: ['Next.js', 'React', 'Animate.css', 'Bootswatch', 'Classnames', 'NProgress']},
    //{ id: 5, img: image15p, descripcion: 'Proyecto 5' },
    { id: 6, img: image16p, descripcion: 'Image gallery, the tools used were the following:' , link: 'https://reacttsapp-production.up.railway.app/' ,gitlink: 'https://github.com/Maze000/reactTsApp',elementos: ['React', 'React DOM', 'React Router DOM', 'CSS']},
   // { id: 7, img: image17pro, descripcion: 'Proyecto 7' },
    //{ id: 8, img: image18pro, descripcion: 'Proyecto 8' },
    { id: 9, img: image19pro, descripcion: 'Crud api rest, the tools used were the following:' , link: 'https://reacttsapp-production.up.railway.app/' ,gitlink: 'https://github.com/Maze000/reactTsApp',elementos: ['React', 'React DOM', 'TypeScript', 'React Scripts', 'BootsWatch','React Icons']},
    { id: 10, img: image20pro, descripcion: 'Cryptocurrency tracker, the tools used were the following:' , link: 'https://reactcoingeckoapp-production.up.railway.app/' ,gitlink: 'https://github.com/Maze000/reactCoinGeckoApp',elementos: ['React', 'React DOM', 'Axios', 'Bootstrap', 'React Scripts', 'Coingecko API']},
    //{ id: 11, img: image21pro, descripcion: 'Proyecto 11' },
    { id: 12, img: image22pro, descripcion: 'Crud with data storage, the tools used were the following:' , link: 'https://flaskreactappcrud-production.up.railway.app/',gitlink: 'https://github.com/Maze000/flaskReactAppCrud',elementos: ['Flask', 'React', 'MongoDB', 'Axios', 'Bootstrap', 'Flask-CORS'] },
   // { id: 13, img: image23pro, descripcion: 'Proyecto 13' },
    { id: 14, img: image24pro, descripcion: 'Notifications in the browser, the tools used were the following:' , link: 'https://nodepushnotification-production.up.railway.app/' ,gitlink: 'https://github.com/Maze000/nodePushNotification',elementos: ['Node.js', 'Express', 'Web Push', 'Dotenv', 'Morgan', 'Nodemon']},
    //{ id: 15, img: image25pro, descripcion: 'Proyecto 15' , link: 'https://ecommercemern-production.up.railway.app/form-1' ,elementos: ['Elemento 1A', 'Elemento 2A', 'Elemento 3A', 'Elemento 4A', 'Elemento 3A', 'Elemento 4A']},
    { id: 16, img: image26pro, descripcion: 'Quiz test, the tools used were the following:' , link: 'https://jsquiz-production.up.railway.app/' ,gitlink: 'https://github.com/Maze000/jsQuiz',elementos: ['HTML', 'JS', 'CSS']},
    //{ id: 17, img: image27pro, descripcion: 'Proyecto 17' },
    //{ id: 18, img: image28pro, descripcion: 'Proyecto 18' },
    //{ id: 19, img: image29pro, descripcion: 'Proyecto 19' },
    { id: 20, img: image30pro, descripcion: 'Api rest for film showcase, the tools used were the following:' , link: 'https://ecommercemern-production.up.railway.app/form-1' ,gitlink: 'https://github.com/Maze000/movieAPiRest',elementos: ['React', 'React DOM', 'Webpack', 'Babel', 'Bootswatch', 'OMDb API']},
    //{ id: 21, img: image31pro, descripcion: 'Proyecto 21' },
    { id: 21, img: image32pro, descripcion: 'User validation with token, the tools used were the following:' , link: 'https://mernuservalidatorcrud-production.up.railway.app/login',gitlink: 'https://github.com/Maze000/mernUserValidatorCrud',elementos: ['React', 'Express', 'Mongoose', 'JSON Web Token (JWT)', 'Webpack', 'Jest'] },
    { id: 21, img: image33pro, descripcion: 'Online payment system, the tools used were the following:' , link: 'https://ecommercemern-production.up.railway.app/form-1' ,gitlink: 'https://github.com/Maze000/ecommerceMern',elementos: ['React', 'React DOM', 'React Router DOM', 'Stripe API', 'Fetch', 'Webpack']},
    //{ id: 21, img: image34pro, descripcion: 'Proyecto 24' },
    { id: 21, img: image35pro, descripcion: 'Portfolio developed in React, the tools used were the following:', link: 'https://patriciomolinae.com/'  ,gitlink: 'https://github.com/Maze000/portfolioPm',elementos: ['React', 'React DOM', 'React Router DOM', 'React Scroll', 'Express', 'Nodemailer']},
    { id: 21, img: image36pro, descripcion: 'Integration of chatgpt api, the tools used were the following:' , link: 'https://ecommercemern-production.up.railway.app/form-1' ,gitlink: 'https://github.com/Maze000/chatGptApi',elementos: ['React', 'React DOM', 'OpenAI API', 'Fetch API', 'CSS']},
    { id: 21, img: image37pro, descripcion: 'Integration of chatgpt api for Dall-E2, the tools used were the following:' , link: 'https://ecommercemern-production.up.railway.app/form-1' ,gitlink: 'https://github.com/Maze000/dallEApi',elementos: ['React', 'React DOM', 'OpenAI API', 'Fetch API', 'CSS']}
  ];

  return (
    <div className="App">
      <header className="App-header">


        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <nav className={isMenuOpen ? 'nav-open' : ''}>
        <div className='avatar-init'>
        <div className="avatar">
          </div>
          <Link activeClass="active" to="nombre" spy={true} smooth={true} offset={-60} duration={500} className="avatar-name" onClick={toggleMenu}><span> PATRICIO </span> <span> MOLINA</span></Link>
          
        </div>

          <Link activeClass="active" to="nombre" spy={true} smooth={true} offset={-60} duration={500} onClick={toggleMenu}>HOME</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} onClick={toggleMenu}>ABOUT</Link>
          <Link activeClass="active" to="proyectos" spy={true} smooth={true} offset={-60} duration={500} onClick={toggleMenu}>PROJECTS</Link>
          
          <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-60} duration={500} onClick={toggleMenu}>CONTACT</Link>
          <div className="nav-icon-init">
          

  <a href="https://www.linkedin.com/in/patricio-molina-escobar-62571623b/" target="_blank" rel="noopener noreferrer" className="nav-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a 
    href="https://github.com/Maze000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="nav-icon"
    onClick={toggleMenu}  
  >
    <FontAwesomeIcon icon={faGithub} size="2x" />
  </a>
            
            </div>
        </nav>
      </header>

      <Element name="nombre" className="element-name img0">
        <div className="nameCen">
          <div className="nombre">
            <h1><span className="principal">HEY, I'M PATRICIO</span><span className="principal2"> MOLINA</span></h1>
            <h3>Software Engineer JavaScript & Python environment.</h3>
            <h4>Creating ideas to build pathways. Welcome to my world, a little space for creativity</h4>
            <Link 
  className='button-tittle'  
  activeClass="active" 
  to="proyectos" 
  spy={true} 
  smooth={true} 
  offset={-60} 
  duration={500} 
  onClick={toggleMenu}
>
  PROJECTS
</Link>
          </div></div>

      </Element>

      <Element name="skills" className="element-about img1">
      <div className='aboutme'>
          <h2>ABOUT ME</h2>
          <p className='intro'>This is a small extract of my career in the <strong>software technology</strong> field and what my path has been like 
            and the technologies that I have been integrating into my pocket.</p>
        </div>
        <div className="skillsSection">
          <div className="skillsDescription">
            <h2>Something about me...</h2>
            <p>My journey into programming began with the creation of video games using <strong>Python</strong> and <strong>Pygame</strong>.
            Over time, I expanded my skills, diving into languages like <strong>C++</strong>, <strong>PHP</strong>, and <strong>JavaScript</strong>, leveraging various tools within the latter ecosystem.
            Currently, I am focused on working with <strong>LangChain</strong>, an AI framework, and integrating cutting-edge technologies to build innovative solutions. 
            If you'd like to share ideas or collaborate on projects, feel free to connect with me on <a href="https://www.linkedin.com/in/patricio-molina-escobar-62571623b/" target="_blank" rel="noopener noreferrer" className="">
              
              <strong>Linkedin</strong></a>.
              
              
              
              </p>
              <Link 
  className='button-aboutme'  
  activeClass="active" 
  to="contacto" 
  spy={true} 
  smooth={true} 
  offset={-60} 
  duration={500} 
  onClick={toggleMenu}
>
  CONTACT
</Link>
          </div>


          <div className='img-container'>
          <h2>Skills</h2>
          <div className="skillsContainer">
          
            <img src={image1} alt="Skill 1" />
            <img src={image2} alt="Skill 2" />
            <img src={image3} alt="Skill 1" />
            <img src={image4} alt="Skill 1" />
            <img src={image5} alt="Skill 1" />
            <img src={image6} alt="Skill 1" />
            <img src={image7} alt="Skill 1" />
            <img src={image8} alt="Skill 1" />
            <img src={image9} alt="Skill 1" />
            <img src={image10} alt="Skill 1" />
            <img src={image11} alt="Skill 1" />
            <img src={image12} alt="Skill 2" />
            <img src={image13} alt="Skill 1" />
            <img src={image14} alt="Skill 1" />
            <img src={image15} alt="Skill 1" />
            <img src={image16} alt="Skill 1" />
          </div></div></div>
      </Element>
      
      <Element name="proyectos" className="element-proyects img4">
        <div className='proyects-tittle'>
          <h2>PROJECTS</h2>
        </div>
        <div className="projectsContainer">
          {proyectos.slice(0, proyectosVisibles).map((proyecto) => (
            <div className="proyect-box" key={proyecto.id}>
              <div>
                <a href={proyecto.link} target="_blank" className="project">
                  <img src={proyecto.img} alt={proyecto.descripcion} />
                </a>
                <p className='tittle-proyect'>{proyecto.descripcion}</p>
                <ul className="vertical-list">
          {proyecto.elementos.map((elemento, index) => (
            <li key={index}><strong>{elemento}</strong></li>
          ))}
        </ul>
                <button className="elegant-button" onClick={() => window.open(proyecto.gitlink, '_blank')}>Github</button>
              </div>
            </div>
          ))}
        </div>

        {proyectosVisibles < proyectos.length && (
          <button className="load-button" onClick={cargarMasProyectos}>
            Load More
          </button>
        )}
      </Element>

      <Element name="contacto" className="element img5">
       


      <div className='contact-tittle'>
          <h2>CONTACT</h2>
        </div>

        <Contact />
      </Element>

      <div className="App">
        <footer className='footer1' onClick={scrollToTop}>^</footer>

        <footer className="footer2">
          <div>
          <div className="socialMedia">
            <a href="https://github.com/Maze000" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/patricio-molina-escobar-62571623b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.artstation.com/moved_design-00" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArtstation} size="2x" />
            </a>
            
          </div>
          <p className='footp'>&copy; Copyright 2024. Made by <a href="https://www.linkedin.com/in/patricio-molina-escobar-62571623b/" target="_blank" rel="noopener noreferrer" className='name-footer'><strong> PATRICIO MOLINA</strong></a>. All rights reserved.</p>
          </div>
        </footer>
      </div>




    </div>
  );
};

export default App;










