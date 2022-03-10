import { Categories } from '../types';

class MsgRecordBeaconTimestamp {
    public category: Categories;
    public type: string;
    public beacon_id: Number;
    public hash: string;
    public submit_time: Number;
    public owner: string;
    public json: any;

    constructor(payload: any) {
        this.json = payload.json;
        this.category = 'beacon';
        this.type = payload.type;
        this.beacon_id = payload.beacon_id;
        this.hash = payload.hash;
        this.submit_time = payload.submit_time;
        this.owner = payload.owner;
    }

    static fromJson(json: any) {
        return new MsgRecordBeaconTimestamp({
            json,
            type: json['@type'],
            beacon_id: json.beacon_id,
            hash: json.hash,
            submit_time: json.submit_time,
            owner: json.owner,
        });
    }
}

export default MsgRecordBeaconTimestamp;
