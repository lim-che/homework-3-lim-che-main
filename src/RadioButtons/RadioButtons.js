import { Component } from 'react';
import './RadioButtons.css';

class RadioButtons extends Component {
  render() {
    return <div class="radio-buttons">
        <label class="custom-radio">
          <input type="radio" name="radio" />
          <span class="radio-btn"
            ><i class="las la-check"></i>
            <div class="hobbies-icon">
              <i class="las la-biking"></i>
              <h3>Apple</h3>
            </div>
          </span>
        </label>

        <label class="custom-radio">
          <input type="radio" name="radio" />
          <span class="radio-btn"
            ><i class="las la-check"></i>
            <div class="hobbies-icon">
              <i class="las la-futbol"></i>
              <h3>Pear</h3>
            </div>
          </span>
        </label>
        <label class="custom-radio">
          <input type="radio" name="radio" />
          <span class="radio-btn"
            ><i class="las la-check"></i>
            <div class="hobbies-icon">
              <i class="las la-table-tennis"></i>
              <h3>Orange</h3>
            </div>
          </span>
        </label>
      </div>

    
    
    ;
  }
}

export default RadioButtons;
