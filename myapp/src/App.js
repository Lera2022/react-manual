import './App.css';

function App(props) {
  const topPosition = '40px';
  return (
    // <div className="App">
    //   <header className="App-header">
    //     My First React App
    //     <h3>Hello, {props.name}</h3>
    //   </header>
    // </div>
    // <div style={{paddingTop: '25px'}}>
    //   Inline Styles
    // </div>
    <div>
      {/* <header className="App-header" style={{top: topPosition}}>
        My First React App
      <h3>Hello, {props.name}</h3>
      </header> */}
      <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
        style={{top: props.topPosition || '10px'}}>
        My First React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>
  );
}

export default App;