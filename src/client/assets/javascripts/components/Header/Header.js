import React from 'react';
import "./header.scss"

export default function Header() {
    return (
      <header>
        <a href="https://www.adyax.com/">
          <img alt="Adyax" src={require("../../../images/logo.jpg")} />
        </a>
        <h5>a better experience</h5>
        <h1>Front-End Developer<span>.</span></h1>
        <h3>
          Adyax's core values take top priority: we care for our client,
          and we care for our people. Staff and clients work in partnership
          with consistent, transparent communication.
        </h3>
      </header>
    );
}
