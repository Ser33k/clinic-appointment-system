import "./Home.scss";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="section section__home">
        {/* <h2 className="home__title title">Jak działamy</h2> */}

        <div className="home__img home__img--doctor"></div>

        <div className="home__img home__img--bubble talk-bubble tri-right left-in">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hej! <br> Jeśli potrzebujesz pomocy lekarza, rejestruj się i rezerwuj wizytę!"
                )
                .changeDelay(75)
                .start();
            }}
          />
        </div>
      </section>
      <section className="section section--instruction">
        <h2 className="instruction__title title">Jak zarezerować wizytę?</h2>
        <div className="instruction__steps">
          <div className="step">
            <div className="test">
              <p>KROK 1</p>
            </div>
            <p className="step__description">Logowanie/rejestracja</p>
          </div>
          <div className="step">
            <div className="test">
              <p>KROK 2</p>
            </div>
            <p className="step__description">Znajdź lekarza</p>
          </div>
          <div className="step">
            <div className="test">
              <p>KROK 3</p>
            </div>
            <p className="step__description">Zarezerwuj wizytę</p>
          </div>
          <div className="step">
            <div className="test">
              <p>KROK 4</p>
            </div>
            <p className="step__description">Przyjdź na wizytę</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
