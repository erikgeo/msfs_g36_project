class BonanzaHangar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {

    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {

      var title = SimVar.GetSimVarValue("TITLE", "string");
      var livery = title.replace(/\s+/g, '_');
      var hobbs = GetStoredData('G36XIP_LEFT_FUEL_'+livery)
      console.log(hobbs);

    }, delayInMilliseconds);




  }
}
window.customElements.define("bonanza-hangar", BonanzaHangar);
checkAutoload();