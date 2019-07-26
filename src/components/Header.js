import React from 'react';
import {badge} from "reactstrap"

export default function Header() { 
  
  return <header className="ui centered">
    <h1 className="ui center">Rick &amp; Morty Fan Page <badge color="secondary">Wub-A-Dub!</badge></h1>
  </header>
}