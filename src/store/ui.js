import {observable, autorun, action, computed} from "mobx";

class Sidebar {
    @observable panel;

    constructor({panel}) {
        this.panel = panel;
    }
}


class Map {
    @observable type;

    constructor() {
        this.type = 'standard';
    }
}


export default {
  sidebar: new Sidebar({panel: 'IncidentsList'}),
  map: new Map(),
}
