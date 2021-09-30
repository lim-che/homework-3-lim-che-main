import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
   return <div>
   <label class="custom-radio">
      <input type="radio" name="radio" checked />
      <span class="radio-btn">
        <i class="las la-check"></i>
        <div class="hobbies-icon">
          <i class="las la-biking"></i>
          <h3>{this.props.text}</h3>
        </div>
      </span>
    </label>
    </div>
  }
}

export default Button;



{/* <button className="Default-button">{this.props.text}</button>; */}