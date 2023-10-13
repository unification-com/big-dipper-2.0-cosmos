import { Categories } from '../types';

class MsgProcessUndPurchaseOrder {
  public category: Categories;
  public type: string;
  public purchaseOrderId: number;
  public decision: string;
  public signer: string;
  public json: any;

  constructor(payload: any) {
    this.json = payload.json;
    this.category = 'enterprise';
    this.type = payload.type;
    this.purchaseOrderId = payload.purchase_order_id;
    this.decision = payload.decision;
    this.signer = payload.signer;
  }

  static fromJson(json: any) {
    return new MsgProcessUndPurchaseOrder({
      json,
      type: json['@type'],
      purchase_order_id: json.purchase_order_id,
      decision: json.decision,
      signer: json.signer,
    });
  }
}

export default MsgProcessUndPurchaseOrder;
