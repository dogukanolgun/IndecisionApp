class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    console.log('Hello');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <VisibilityToggle />,
  document.getElementById('app')
);

////////////////////////////////////////////////////////////////////////// 

// console.log('App is running!');

// const app = {
//     title: 'Visibility Toggle',
//     hidenDetail: 'Hey. These are some details you can now see!'
// };

// let checkIfTrue = false;
// const isItTrueOrFalse = () => {
//     checkIfTrue = !checkIfTrue;
//     renderBuiltItVisible();
// };


// const appRoot = document.getElementById('app');

// const renderBuiltItVisible = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={isItTrueOrFalse}>
//         {checkIfTrue ? 'Hide detaisl' : 'Show details'}
//       </button>
//       {
//         checkIfTrue && <div><p>{app.hidenDetail}</p></div>
//       }
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderBuiltItVisible();
