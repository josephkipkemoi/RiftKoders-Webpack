import "./Header.css"

function HeaderComponent() {
    const element = document.createElement("h1")

    element.innerHTML = _.join(["RiftKoders", "Webpack"], ' ')

    return element
 
 }

 export default HeaderComponent