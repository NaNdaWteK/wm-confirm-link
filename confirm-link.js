class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', function(event) {
      if(!confirm('with this app, you can filter books. Do you want to go?')){
        event.preventDefault()
      }
    })
  }
}

customElements.define('wm-confirm-link', ConfirmLink, { extends: 'a' })
