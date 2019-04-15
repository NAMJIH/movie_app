import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   '생일',
//   '헬보이',
//   '샤잠!',
//   '미성년',
//   '극한직업'
// ];

const movies = [{
title:'생일',
poster:'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg'
},{
title:'헬보이',
poster:'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg'
},{
title:'샤잠!',
poster:'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg'
},{
title:'미성년',
poster:'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg'
},{
title:'극한직업',
poster:'http://img.sbs.co.kr/newsnet/etv/upload/2019/01/23/30000621861_700.jpg'
},{
}]

//
// Life Circle 
//

// render : componentWillMount() -> render() -> componentDidMount()
// update : componentWillReceiveProps() -> componentShouldUpdate() -> componentWillUpdate() -> render()
//                                          return (old props == new props)

class App extends Component {
  componentWillMount(){
    // request API
    console.log('componentWillMount() called')
  }
  componentDidMount(){
    // after request API
    console.log('componentDidMount() called')
  }
  render() {
    console.log('render() called')
    return 
      <div className='App'>
      {
        movies.map((movie, index) => 
          <Movie title={movie.title} poster={movie.poster} key={index}/>
        )
      }
        </div>
    );
  }
}

export default App;