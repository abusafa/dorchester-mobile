import {observable, autorun, action, computed} from "mobx";
import {find} from 'lodash';

export class UserObject {
    @observable token = '';
    @observable login = 'loggedOut';
    @observable activationCode = '0000';

    constructor({username, password, role, activationCode}) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.activationCode = activationCode;
    }
}


export class UsersListObject {
    @observable users = [];
    @observable activeUser;

    isUser({username,password}){
      return find(this.users,{username,password} )
    }
}

let usersStore = new UsersListObject();

usersStore.users.push(
  new UserObject({username:'admin', password:'admin', role:'admin', activationCode:'1234'}),
  new UserObject({username:'user', password:'user', role:'user', activationCode: '1111'}),
);

export default usersStore;
