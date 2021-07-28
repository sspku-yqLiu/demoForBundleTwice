import * as React from 'react';

const App: React.FC = () => {
  //  NOTE HERE:
  //  hello react will appear twice
  //  so this bundle has been executed twice
  console.log('hello react')
  // but this clicked never appears
  return <button onClick = {() => {console.log('clicked')}}> Click Here </button>
};

export default App;
