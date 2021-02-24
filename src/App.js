import {Header} from '@telia/styleguide'


function App() {
  return (
    <div>
      <div>
    <Header iconName="ico_favourites" pageTitle="Hihi" withContentOverlap={true}>
      Tarkkana niiden linkkien kanssa.
    </Header>
    <div className="focus-box">
      <div className="focus-box__content-outer">
        <div className="container container--small container--no-margin">
          <p>This is an IDN homograph attack vector. Check for more details <a href="https://en.wikipedia.org/wiki/IDN_homograph_attack">here</a></p>
        </div>
      </div>
    </div>
  </div>
    </div>
    
    

  );
}

export default App;
