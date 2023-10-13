import { Categories } from '../types';

class MsgWhitelistAddress {
  public category: Categories;
  public type: string;
  public address: string;
  public whitelistAction: string;
  public signer: string;
  public json: any;

  constructor(payload: any) {
    this.json = payload.json;
    this.category = 'enterprise';
    this.type = payload.type;
    this.address = payload.address;
    this.whitelistAction = payload.whitelist_action;
    this.signer = payload.signer;
  }

  static fromJson(json: any) {
    return new MsgWhitelistAddress({
      json,
      type: json['@type'],
      address: json.address,
      whitelist_action: json.whitelist_action,
      signer: json.signer,
    });
  }
}

export default MsgWhitelistAddress;
