import { Categories } from '../types';

class MsgRegisterBeacon {
    public category: Categories;
    public type: string;
    public moniker: string;
    public name: string;
    public owner: string;
    public json: any;

    constructor(payload: any) {
      this.json = payload.json;
      this.category = 'beacon';
      this.type = payload.type;
      this.moniker = payload.moniker;
      this.name = payload.name;
      this.owner = payload.owner;
    }

    static fromJson(json: any) {
      return new MsgRegisterBeacon({
        json,
        type: json['@type'],
        moniker: json.moniker,
        name: json.name,
        owner: json.owner,
      });
    }
}

export default MsgRegisterBeacon;
