import React from 'react';
import { Link } from 'react-router-dom'
import './Snippet.css';

class Snippet extends React.Component {
  render() {
    return (
      <div className="container-fluid tile" id="Snippet">
        <p><strong className = "black87">ech·o</strong></p>
        <p><strong className = "black87">/ˈekō/</strong></p>
        
        <p className = "black54">noun</p> 

        <ol className = "black54">
          <li className = "black54">
            <p className = "black54">a sound or series of sounds caused by the reflection of sound waves from a surface back to the listener.</p>
            <p className = "black38">"the walls threw back the echoes of his footsteps"</p>
            <p className = "black38">synonyms: reverberation, reflection, ringing, repetition, repeat</p>
            <p className = "black38">"a faint echo of my shout"</p>
          </li>
          <li className = "black54">
            <p className = "black54">a close parallel or repetition of an idea, feeling, style, or event.</p>
            <p className = "black38">"his love for her found an echo in her own feelings"</p>
            <p className = "black38">synonyms: duplicate, copy, replica, imitation, mirror image, double, match, parallel;</p>
          </li>
        </ol>
        
        <p className = "black54">verb</p>
       
        <ol className = "black54">
          <li className = "black54">
            <p className = "black54">(of a sound) be repeated or reverberate after the original sound has stopped.</p>
            <p className = "black38">"their footsteps echoed on the metal catwalks"</p>
          </li>
          <li className = "black54">
            <p className = "black54">(of an object, movement, or event) be reminiscent of or have shared characteristics with.</p>
            <p className = "black54">"a blue suit that echoed the color of her eyes"</p>
          </li>
        </ol>

      </div>
    );
  }
}

export default Snippet;