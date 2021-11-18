class BonanzaHangar extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    console.log('test');
    let lat = SimVar.GetSimVarValue("PLANE LATITUDE", "degree latitude");
    console.log(lat);
  }

}
window.customElements.define("bonanza-hangar", BonanzaHangar);
checkAutoload();