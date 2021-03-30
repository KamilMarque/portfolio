import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from './ui/Button';
import ContactForm from './App/form'
// import { Arrow } from './ui/Arrow';

function App() {
  const portfolio = [
    {name: 'reva', title:'Algorythme de trie', text:"Developpement d'un algorythme de trie pour l'annuaire du site REVA", link:'//reva.network/annuaire#list'},
    {name: 'nokto', title:'Site Notko', text:'Developpement intégral du site Nokto avec NuxtJs. Ajout de google Analytics', link:'//nokto.fr'},
    {name: 'aBetterDiet', title:'Template "A better diet"', text:'Developpement du Template en HTML/CSS', link:'//abetterdiet.nokto.fr/'},
    {name: 'anumWhiteley', title:'Template "Anum Whiteley"', text:"Developpement du Template en HTML/CSS et connection à l'Api instgram", link:'//anumwhiteley.nokto.fr/'},
    {name: 'portfolio', title:'Ce site', text:'Developpement intégral du site en découvrant ReactJs'},
  ]


  function PortfolioList(props) {
    const items = props.portfolio;
    const listItems  = items.map((item, key) => 
      <div className="slide" key={key}>
        <div className="wrapper portfolio">
          <div className="screenshot" style={{backgroundImage : `url("./img/` + item.name + `.jpg")`}}></div>
          <div className="wrapper__infos">
            <span></span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
              {item.link ? <a className="btn" href={item.link} target="_blank" rel="noreferrer" >Ouvrir la page du projet</a> : null}
          </div>
        </div>
      </div>
    );
    return (
      <div className="section wrapper portfolio">
        {listItems}
      </div>
    )
  }

  function onLeave(origin, destination, direction) {
    let menu = document.querySelectorAll('header ul li a');
    let active = document.querySelector('.activeMenu');
    active.classList.remove('activeMenu');
    menu[destination.index].classList.add('activeMenu')
  }

  return (
    <div className="App">
      <ReactFullpage 
        licenseKey = '79711ABA-ECA34F1A-8156AE2A-181EAA64'
        scrollingSpeed = '1500'
        anchors={['banner', 'about', 'portfolio', 'contact']}
        responsiveWidth = '880'
        onLeave={onLeave.bind(this)}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    {/* <Arrow className="arrow__up" fullpageApi={fullpageApi} />
                    <Arrow className="arrow__down" fullpageApi={fullpageApi} direction='up' /> */}
                    <div className="section s1">
                      <div className="wrapper">
                      <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91">
                        <g id="Groupe_24" data-name="Groupe 24" transform="translate(-915 -64)">
                          <rect id="Rectangle_1" data-name="Rectangle 1" width="91" height="91" transform="translate(915 64)" fill="#3c5645"/>
                          <text id="K." transform="translate(936 127)" fill="#fff" fontSize="50"  fontWeight="700" fontStyle="oblique"><tspan x="0" y="0">K.</tspan></text>
                        </g>
                      </svg>
                        <h1>DEVELOPPEUR <br /> <span>FRONT-END</span></h1>
                        <p className="leftText">A la recherche d'un emploi dans une équipe avec qui je pourrai partager.</p>
                        <Button to='#about'>Me découvrir</Button>
                      </div>
                    </div>

                    <div className="section s3">
                      <div className="wrapper">
                        <h2>Vous recherchez un <br/> developpeur front-end ? </h2>
                        <p>je m'appelle Kamil Marque et je suis développeur front end. J'ai commencé le développement en 2015 à l'école Epitech Toulouse, où j'ai découvert l'algorithmie. Jusqu'à ma 3e année j'ai principalement développé mes projets en langage C.</p>
                        <p>Je me suis ensuite dirigé vers une formation OpenClassrooms en tant que développeur front-end pour accélérer ma pratique.</p>
                        <p>J'ai réalisé une 10ene de projets où j'ai découvert le HTML/CSS et le Javascript. À la fin de ma formation j'ai continué d'apprendre en autodidacte différentes librairies/Framework en tant que freelance.</p>
                        <p>Aujourd'hui je suis aussi à l'aise avec VueJs/NuxtJs car j'ai réalisé quelques missions avec ces Framework. J'ai ensuite décidé de découvrir ReactJs en développant ce site.</p>
                        <p>Au long terme, je souhaite devenir un développeur fullstack et m'intégrer dans une équipe parce que franchement, coder seul c'est vraiment ennuyeux. C'est pour cela que j'ai besoin de vous, je souhaite faire parti d'une équipe de développeurs avec qui je pourrais échanger.</p>
                        {/* <Button to='https://github.com/KamilMarque'>Github</Button> */}
                        <a className="github" href='https://github.com/KamilMarque' target="_blank" rel="noreferrer">Mon Github</a>
                      </div>
                    </div>

                    <PortfolioList portfolio={portfolio} />

                    

                    <div className="section s4">
                      <ContactForm></ContactForm>
                    </div>

                </ReactFullpage.Wrapper>
            )
        }}
      />
    </div>
  );
}

export default App;
