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
      <div className="section wrapper">
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
        anchors={['banner', 'portfolio', 'about', 'contact']}
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
                        <p className="leftText">Bienvenue sur mon portfolio. Je m'appelle Kamil Marque, je suis développeur Front end, formé 3 ans à épitech et diplomé d'Openclassrooms. Aujourd'hui, je recherche un emploi dans une équipe avec qui je pourrais partager des connaissances. </p>
                        <Button to='#portfolio'>DÉCOUVRIR MES PROJETS</Button>
                      </div>
                    </div>

                    <PortfolioList portfolio={portfolio} />

                    <div className="section s3">
                      <div className="wrapper">
                        <h2>Vous recherchez un <br/> developpeur front-end ? </h2>
                        <p>Bienvenue sur mon portfolio. Je m'appelle Kamil, je suis développeur Front end, formé 3 ans à épitech et diplomé d'Openclassrooms. Aujourd'hui, je recherche un emploi dans une chouette équipe.  Bienvenue sur mon portfolio. Je m'appelle Kamil, je suis développeur Front end, formé 3 ans à épitech et diplomé d'Openclassrooms. Aujourd'hui, je recherche un emploi dans une chouette équipe.  BLABLA COMPETENCES et ce que tu peux apporter a l'entreprise</p>
                        <p>Bienvenue sur mon portfolio. Je m'appelle Kamil, je suis développeur Front end, formé 3 ans à épitech et diplomé d'Openclassrooms. Aujourd'hui, je recherche un emploi dans une chouette équipe. Bienvenue sur mon portfolio. Je m'appelle Kamil, je suis développeur Front end, formé 3 ans à épitech et diplomé d'Openclassrooms. Aujourd'hui, je recherche un emploi dans une chouette équipe.  BLABLA PERSONALITE + Hobbies</p>
                        <Button>ME CONTACTER</Button>
                      </div>
                    </div>

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
