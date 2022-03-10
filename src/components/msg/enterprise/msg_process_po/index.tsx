import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgProcessUndPurchaseOrder } from '@models';
import { Name } from '@components';

const ProcessUndPurchaseOrder = (props: {
    message: MsgProcessUndPurchaseOrder;
}) => {
  const { message } = props;

  let decision;
  switch (message.decision) {
    case 'STATUS_ACCEPTED':
      decision = 'Accept';
      break;
    case 'STATUS_REJECTED':
      decision = 'Reject';
      break;
    default:
      decision = message.decision;
      break;
  }

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgProcessUndPurchaseOrder"
        components={[
          (
            <Name
              address={message.signer}
              name={message.signer}
            />
          ),
        ]}
        values={{
          decision,
          purchase_order_id: String(message.purchaseOrderId),
        }}
      />
    </Typography>
  );
};

export default ProcessUndPurchaseOrder;
