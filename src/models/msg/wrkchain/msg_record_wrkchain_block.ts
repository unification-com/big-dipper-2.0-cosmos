import { Categories } from '../types';

class MsgRecordWrkChainBlock {
    public category: Categories;
    public type: string;
    public wrkchain_id: Number;
    public height: Number;
    public block_hash: string;
    public parent_hash: string;
    public hash1: string;
    public hash2: string;
    public hash3: string;
    public owner: string;
    public json: any;

    constructor(payload: any) {
        this.json = payload.json;
        this.category = 'wrkchain';
        this.type = payload.type;
        this.wrkchain_id = payload.wrkchain_id;
        this.height = payload.height;
        this.block_hash = payload.block_hash;
        this.parent_hash = payload.parent_hash;
        this.hash1 = payload.hash1;
        this.hash2 = payload.hash2;
        this.hash3 = payload.hash3;
        this.owner = payload.owner;
    }

    static fromJson(json: any) {
        return new MsgRecordWrkChainBlock({
            json,
            type: json['@type'],
            wrkchain_id: json.wrkchain_id,
            height: json.height,
            block_hash: json.block_hash,
            parent_hash: json.parent_hash,
            hash1: json.hash1,
            hash2: json.hash2,
            hash3: json.hash3,
            owner: json.owner,
        });
    }
}

export default MsgRecordWrkChainBlock;
