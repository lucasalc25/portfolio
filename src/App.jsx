
import './App.css'

function App() {

  return (
    <>
      <div className="class-body">
        <header id="header">
        <div id="header-content">
            <div id="logo-container">
                <div id="logo-img-cont">
                    <img src="/src/assets/img/index/foto-perfil.jpg" alt="Logo" id="logo-img"/>
                </div>
                <span id="logo-sub">
                    Lucas Alcântara
                </span>
            </div>
            <div id="header-main">
                <ul id="navbar">
                    <li><a href="#home" className="header-link">Home</a></li>
                    <li><a href="#about" className="header-link">Sobre</a></li>
                    <li><a href="#projects" className="header-link">Projetos</a></li>
                    <li><a href="#contact" className="header-link">Contato</a></li>
                </ul>
                <div id="burguer-cont">
                    <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" className="burguer-menu"/>
                    <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className="burguer-menu-close display-none"/>
                </div>
            </div>
        </div>
        <div className="small-menu">
            <div className="small-menu-content">
              <ul className="small-menu-links">
                <li className="small-menu-link">
                  <a href="#home"> Home </a>
                </li>
      
                <li className="small-menu-link">
                  <a href="#about"> Sobre </a>
                </li>
      
                <li className="small-menu-link">
                  <a href="#projects"> Projetos </a>
                </li>
      
                <li className="small-menu-link">
                  <a href="#contact"> Contato </a>
                </li>
              </ul>
            </div>
          </div>
          </header>
          <div id="botton-header">
              <h1>Desenvolvedor Web Front-End</h1>
          </div>

          <section id="home" className="home">
              <div id="home-content">
                  <h1 id="home-title">Bem-vindo(a)!</h1>
                  <div id="home-info">
                      <p className="info">Aqui você conhecerá um entusiasta da web apaixonado por criar experiências incríveis.</p>
                  </div>
                  <div id="home-btn">
                      <a href="#projects" className="btn">Projetos</a>
                  </div>
              </div>
              <div id="home-mouse-scroll-cont">
                  <div id="mouse">
                  </div>
              </div>

          </section>

          <section id="about" className="about second-pad">
              <div className="about-container">
                  <h2 className="about-cont-title">Sobre</h2>
                  <p className="description">Me chamo Lucas Alcântara, tenho 27 anos e estou concluindo este ano uma graduação em Ciência da Computação e cursos especializados em Desenvolvimento Web voltado para o Front-End. Estou muito empolgado e aberto a oportunidades de trabalho onde eu possa contribuir, aprender e crescer. Se você tiver uma oportunidade que corresponda às minhas competências, entre em contato por favor.</p>
                  <a className="btn btn-average" href="#contact">Contato</a>
              </div>
              <div className="about-container">
                  <h3 className="subtitle">Habilidades</h3>
                  <div className="skills">
                      <div className="skill"><img src="/src/assets/img/index/logo-html.png" alt="HTML"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-css.png" alt="CSS"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-js.png" alt="Javascript"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-react.png" alt="React"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-bootstrap.png" alt="Bootstrap"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-angular.png" alt="Angular"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-vue.png" alt="Vue"/></div>
                      <div className="skill"><img id="logo-git" src="/src/assets/img/index/logo-git.png" alt="Git"/></div>
                      <div className="skill"><img src="/src/assets/img/index/logo-github.png" alt="Github"/></div>
                  </div>
              </div>
          </section>

          <section id="projects" className="projects second-pad">
              <div className="projects-container">
                  <h2 className="project-cont-title">Projetos</h2>
                  <p className="description">Aqui você encontrará alguns dos projetos pessoais e acadêmicos que criei. Espero que goste!</p>
                  <div className="projects">
                    
                      <div className="projects-row">
                          <div className="projects-img-cont"><img src="/src/assets/img/index/to-do.png" alt="Projeto 1"/></div>
                          <div className="project-content">
                              <h3 className="project-title">Gerenciador de Tarefas</h3>
                              <p className="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos, id earum, nemo eos, facere quibusdam sed a distinctio sequi quaerat ad quae iste rerum autem nostrum consectetur officiis eveniet.</p>
                              <a className="btn btn-average" href="./to-do-avançado/to-do-avançado.html" target="_blank">Link do Projeto</a>
                          </div>
                      </div>

                      <div className="projects-row">
                          <div className="projects-img-cont"><img src="/src/assets/img/index/gerador-qr-code.png" alt="Projeto 2"/></div>
                          <div className="project-content">
                              <h3 className="project-title">Gerador de QR Code</h3>
                              <p className="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos, id earum, nemo eos, facere quibusdam sed a distinctio sequi quaerat ad quae iste rerum autem nostrum consectetur officiis eveniet.</p>
                              <a className="btn btn-average" href="./gerador-qr-code/geradorqrcode.html" target="_blank">Link do Projeto</a>
                          </div>
                      </div>

                      <div className="projects-row">
                          <div className="projects-img-cont"><img src="/src/assets/img/index/pokedex.png" alt="Projeto 3"/></div>
                          <div className="project-content">
                              <h3 className="project-title">Pokedex</h3>
                              <p className="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos, id earum, nemo eos, facere quibusdam sed a distinctio sequi quaerat ad quae iste rerum autem nostrum consectetur officiis eveniet.</p>
                              <a className="btn btn-average" href="./pokedex/pokedex.html" target="_blank">Link do Projeto</a>
                          </div>
                      </div>

                      <div className="projects-row">
                        <div className="projects-img-cont"><img src="/src/assets/img/index/cardapio.png" alt="Projeto 4"/></div>
                        <div className="project-content">
                            <h3 className="project-title">Cardápio de Restaurante em React</h3>
                            <p className="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos, id earum, nemo eos, facere quibusdam sed a distinctio sequi quaerat ad quae iste rerum autem nostrum consectetur officiis eveniet.</p>
                            <a className="btn btn-average" href="./restaurante/index.html" target="_blank">Em breve</a>
                        </div>
                    </div>

                  </div>
              </div>
          </section>

          <section id="contact" className="contact second-pad dynamic-bg">
              <div className="contact-container">
                <h2 className="contact-cont-title">Contato</h2>
                <p className="description">Fique à vontade para entrar em contato comigo enviando o formulário abaixo. Entrarei em contato com você o mais breve possível</p>
                <div className="contact-form-container">
                  <form action='#' className='contact-form' method='post'><input type='hidden' name='form-name' value='form 1' />
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="name">Nome</label>
                      <input required placeholder="Digite seu nome..." type="text" className="contact-form-input" name="name"
                        id="name" />
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="email">Email</label>
                      <input required placeholder="Digite seu email..." type="email" className="contact-form-input" name="email"
                        id="email" />
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="message">Mensagem</label>
                      <textarea required cols="30" rows="10" className="contact-form-input" placeholder="Digite sua mensagem..."
                        name="message" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn contact-btn">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </section>
          
            <footer className="footer">
              <ul className="social-icon">
                  <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/lucasalc25" target="blank">
                      <ion-icon name="logo-github"></ion-icon>
                    </a></li>
                  <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/lucas-alc%C3%A2ntara-holanda-673114213/" target="blank">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                  <li className="social-icon__item"><a className="social-icon__link" href="#">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                  <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/lucasalc25/" target='blank'>
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
                <ul className="menu">
                  <li className="menu__item"><a className="menu__link" href="#home">Home</a></li>
                  <li className="menu__item"><a className="menu__link" href="#about">Sobre</a></li>
                  <li className="menu__item"><a className="menu__link" href="#projects">Projetos</a></li>
                  <li className="menu__item"><a className="menu__link" href="#contact">Contato</a></li>
            
                </ul>
                <p>&copy;2024 Lucas Alcântara | Todos os direitos reservados</p>
              </footer>
      </div>
    </>
  )
}

export default App
