import { Categories } from '../types';

class MsgUndPurchaseOrder {
    public category: Categories;
    public type: string;
    public purchaser: string;
    public amount: MsgCoin;
    public json: any;

    constructor(payload: any) {
      this.json = payload.json;
      this.category = 'enterprise';
      this.type = payload.type;
      this.purchaser = payload.purchaser;
      this.amount = payload.amount;
    }

    static fromJson(json: any) {
      return new MsgUndPurchaseOrder({
        json,
        type: json['@type'],
        purchaser: json.purchaser,
        amount: json.amount,
      });
    }
}

export default MsgUndPurchaseOrder;
