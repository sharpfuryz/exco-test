/**
 * Adds an ex.co script to the page
 * Why do we need a component?
 *  Internal markup is kind of invalid for compiler
 */
import React from 'react';

export default class ExcoScript extends React.Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id =id;js.src='https://embed.playbuzz.com/sdk.js';fjs.parentNode.insertBefore(js,fjs);}(document, 'script','playbuzz-sdk'));`
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}
