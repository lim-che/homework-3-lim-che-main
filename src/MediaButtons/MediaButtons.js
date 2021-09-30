import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './MediaButtons.css';

class MediaButtons extends Component {
  render() {
    return (<div className="panel">
      <Panel backgroundColor="blue">
        <Button text="Rewind" onClick={() => {}} />
        <Button text="Forward" onClick={() => {}} />
        <Button text="Play" onClick={() => {}} color="green" size="large" />
        <Button text="Stop" onClick={() => {}} color="red" size="large" />
      </Panel>
      </div>
    );
  }
}

export default MediaButtons;
