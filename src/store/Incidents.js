import {observable, autorun, action, computed} from "mobx";
import {random, range} from 'lodash';
import faker from 'faker';
import FIRST_NAME from '../data/FIRST_NAME.json';
import LAST_NAME from '../data/LAST_NAME.json';
import COUNTRY from '../data/COUNTRY.json';
import WORDS from '../data/WORDS.json';
import HIJRI from '../data/HIJRI.json';

import INCIDENT_MAIN_CAT from '../data/INCIDENT_MAIN_CAT.json';
import INCIDENT_SUB_CAT from '../data/INCIDENT_SUB_CAT.json';
function getWords(){
  return range(random(2,7)).map((item) => ` ${faker.random.arrayElement(WORDS)}`);
}

function getSentences(){
  return range(random(2,7)).map((item) => ` ${getWords()}`);
}

export class IncidentObject {
    id = Math.random();
    @computed get title() {
      return this.info.cat;
    }

    @computed get statusColor() {
      let bgColor = '#222';
      if(this.status === 'accepted') bgColor = 'green';
      if(this.status === 'rejected') bgColor = 'red';
      return bgColor;
    }

    @observable status  = 'pinding';
    @observable info;
    @observable location;
    @observable callerInfo;
    @observable instructionList = [];

    constructor(title) {

        this.info = new IncidentInfoObject();
        this.callerInfo = new CallerInfoObject();
        this.location = new LocationObject();
        this.instructionList = range(random(0,7)).map((item) => new IncidentInstructionObject());
    }
}


export class LocationObject {
  @observable latitude;
  @observable longitude;

  constructor() {
    let lats = [
      26.120618,
      26.087331,
      26.057488,
      26.052100
    ];

    let lngs = [
      44.064738,
      43.991711,
      44.020351,
      44.005931
    ];

    this.latitude = faker.random.arrayElement(lats);
    this.longitude = faker.random.arrayElement(lngs);
  }
}



export class IncidentInfoObject {
  @observable number;
  @observable cat;
  @observable subCat;
  @observable details;
  @observable time;

  constructor() {
    this.number = 'CA342556E';
    this.cat = faker.random.arrayElement(INCIDENT_MAIN_CAT).INCIDENT_MAIN_NAME;
    this.subCat = faker.random.arrayElement(INCIDENT_SUB_CAT).INCIDENT_SUB_NAME;
    this.details = getSentences();
    this.time = faker.random.arrayElement(HIJRI);
  }
}


export class CallerInfoObject {
  @observable name;
  @observable nationality;
  @observable mobile;

  constructor() {
    this.name = `${faker.random.arrayElement(FIRST_NAME)} ${faker.random.arrayElement(LAST_NAME)}`;
    this.nationality = faker.random.arrayElement(COUNTRY);
    this.mobile = faker.fake("{{phone.phoneNumber}}");
  }
}

export class IncidentInstructionObject {
  @observable name;
  @observable text;
  @observable time;
  @observable notes;

  constructor() {
    this.name = `${faker.random.arrayElement(FIRST_NAME)} ${faker.random.arrayElement(LAST_NAME)}`;
    this.text = getWords();
    this.time = faker.random.arrayElement(HIJRI);
    this.notes = getWords();
  }
}

export class IncidentListObject {
    @observable incidents = [];
    @observable selectedIncident;
    @computed get unfinishedTodoCount() {
        return this.incidents.filter(incident => !incident.finished).length;
    }
}



let observableIncidentStore = new IncidentListObject();

range(7).map((item) => {
    observableIncidentStore
    .incidents
    .push(new IncidentObject(`Incident ${item}`))
})

export default observableIncidentStore;
