import _ from 'lodash'
import "./index.css"
import Logo from "./logo.svg"
import printMe from './print'

import HeaderComponent from "./Components/Header"

 function component() {
   const element = document.createElement('div');
   element.classList.add("container")
  // Lodash, now imported by this script
   element.innerHTML = _.join(["Webpack", 'RiftKoders'], ' ');

   const myLogo = new Image()
   myLogo.src = Logo

   const btn = document.createElement("button")
   btn.innerText = "Click Me"
   btn.onclick = printMe

   element.appendChild(myLogo)

   element.appendChild(btn)

   return element;
 }

 document.body.appendChild(HeaderComponent());
 document.body.appendChild(component()); 
