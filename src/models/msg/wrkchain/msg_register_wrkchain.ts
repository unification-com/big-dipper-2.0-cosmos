import { Categories } from '../types';

class MsgRegisterWrkChain {
    public category: Categories;
    public type: string;
    public moniker: string;
    public name: string;
    public base_type: string;
    public genesis_hash: string;
    public owner: string;
    public json: any;

    constructor(payload: any) {
        this.json = payload.json;
        this.category = 'wrkchain';
        this.type = payload.type;
        this.moniker = payload.moniker;
        this.name = payload.name;
        this.owner = payload.owner;
        this.base_type = payload.base_type;
        this.genesis_hash = payload.genesis_hash;
    }

    static fromJson(json: any) {
        return new MsgRegisterWrkChain({
            json,
            type: json['@type'],
            moniker: json.moniker,
            name: json.name,
            owner: json.owner,
            base_type: json.base_type,
            genesis_hash: json.genesis_hash,
        });
    }
}

export default MsgRegisterWrkChain;
