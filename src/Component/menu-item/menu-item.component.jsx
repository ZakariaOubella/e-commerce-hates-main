import React, {Component} from "react";
import './menu-item.styles.scss'

class Menu_item extends Component{
    constructor(props){
        super(props)

    }
    render(){
        const {title, img, size} = this.props;
        return (
          <div className={`${size} menu-item`}>
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
            <div className="content">
              <h1 className="title">{title}</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        );
    }
}
export default Menu_item;