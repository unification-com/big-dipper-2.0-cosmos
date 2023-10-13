import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgProcessUndPurchaseOrder } from '@models';

const ProcessUndPurchaseOrder: FC<{ message: MsgProcessUndPurchaseOrder }> = (props) => {
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
        components={[<Name address={message.signer} name={message.signer} />]}
        values={{
          decision,
          purchase_order_id: String(message.purchaseOrderId),
        }}
      />
    </Typography>
  );
};

export default ProcessUndPurchaseOrder;
