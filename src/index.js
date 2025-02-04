import _ from 'lodash'
import "./index.css"
import Logo from "./logo.svg"

import HeaderComponent from "./Components/Header"

 function component() {
   const element = document.createElement('div');
   element.classList.add("container")
  // Lodash, now imported by this script
   element.innerHTML = _.join(["Webpack", 'RiftKoders'], ' ');

   const myLogo = new Image()
   myLogo.src = Logo

   element.appendChild(myLogo)

   return element;
 }

 document.body.appendChild(HeaderComponent());
 document.body.appendChild(component()); 
