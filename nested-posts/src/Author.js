import React, {Component} from 'react';

class Author extends Component{
  render(){
    return(
    <em>By{this.props.author}</em>

    );
  }
}
export default Author;
