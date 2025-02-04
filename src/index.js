import _ from 'lodash';
import HeaderComponent from "./Components/Header"

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(["Webpack", 'RiftKoders'], ' ');

   return element;
 }

 document.body.appendChild(HeaderComponent());
 document.body.appendChild(component()); 
