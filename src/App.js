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
      show: false
    };
  }
  render() {
    const {data: {title, vote_average, image, overview}} = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{vote_average}</p>
        <Image src={image} alt={title} />
        <button type="button" onClick={() => {
          this.setState ({
            show:true
          })
        }}
        >
        Show description
        </button>
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
