/* global htmPreact */
const { html, Component, render } = htmPreact

class App extends Component {
  componentDidMount () {
    this.setState({ loading: true, time: null })
    fetch('/api/time')
      .then(response => response.json())
      .then(data => this.setState({ loading: false, time: data.time }))
  }
  render (props, state) {
    return html`
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col">
            <h1>Hello from your new App</h1>
            <div>
              ${
  state.loading &&
                  html`
                    <p>😴 Loading time from server...</p>
                  `
}
              ${
  state.time &&
                  html`
                    <p>⏱ Time from server: <i>${state.time}</i></p>
                  `
}
            </div>
            <hr />
            <div>
              👩‍💻 Have fun changing the code from this boilerplate:
              <ul>
                <li>UI code avaialble at <code>/src/ui</code></li>
                <li>Server-side code avaialble at <code>/src/server</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

render(html`<${App}/>`, document.getElementById('app'))
