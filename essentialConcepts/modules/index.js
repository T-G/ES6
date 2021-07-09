// "use strict";
// MODULES
// aliasing
// import { getDate, year as currentYear } from './utils/date.js'
import getDate from './utils/date.js'

class App {
    constructor() {
        this.render();
    }

    render() {
        document.getElementById('root').innerHTML = `
        <div>Date: ${ getDate() }</div>
        `
    }
}

new App();
