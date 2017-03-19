/**
 * @flow
 */

'use strict';

const Incident = {
  name: 'Incident',
  properties: {
    CaseNumber: {type: 'string', optional: true},
    CaseDate: {type: 'string', optional: true},
    Officer: {type: 'string', optional: true},
    ReportingPerson: {type: 'string', optional: true},
    PreparedBy: {type: 'string', optional: true},
    IncidentType: {type: 'string', optional: true},
    AddressOfOccurrence: {type: 'string', optional: true},
    Witnesses: {type: 'string', optional: true},
    Evidence: {type: 'string', optional: true},
    WeaponObjectsUsed: {type: 'string', optional: true},
    DetailOfEvent: {type: 'string', optional: true},
    ActionsTaken: {type: 'string', optional: true},

  }
};



module.exports = {
  schema: [Incident],
  schemaVersion: 1,
  //migration: () => {}
};
