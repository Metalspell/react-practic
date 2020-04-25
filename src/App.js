import React from 'react';
import './App.css';

const movie = {
  title: "Metalhead",
  vote_average: "6.9",
  image: "https://image.kinokrad.co/p/f/1418910213_metallistka.jpeg",
  overview: "Металістка — ісландський фільм режисера Раґнара Браґасона про дівчину-металістку, що втратила свого брата рокера та її драматичне життя."
}

function Image(props) {
  return <img src={props.src} alt={props.alt} />
}

class MovieItem extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
      like: false,
      counter: 0
    };
  }
  
  toggleOverview = () => {
    this.setState ({
      show:!this.state.show
    });
  }

  handleLike = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    console.log('fuck')
  }

  
  render() {
    const {data: {title, vote_average, image, overview}} = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{vote_average}</p>
        <Image src={image} alt={title} />
        <div className="buttons">
          <button type="button" onClick={this.toggleOverview}
          >
          {this.state.show ? "Hide description" : "Show description"}
          </button>
          <div>
            <p className="counter-of-likes">{this.state.counter}</p>
            <button type = "button" onClick = {this.handleLike}>
              Like
            </button>
          </div>  
        </div>
        {this.state.show === true ? <p>{overview} </p> : null}
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie}/>
    </div>
  );
}

export default App;
