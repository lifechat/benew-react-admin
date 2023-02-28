import React, { Component } from 'react'
import SnakeMap from './SnakeMap'

 class DzGame extends Component<any,any> {
    public map:any;
    constructor(props:any){
       super(props);
       this.map = new SnakeMap();
    }
  render() {
    return (
      <div>index

        {this.map}
      </div>
    )
  }
}

export default DzGame
