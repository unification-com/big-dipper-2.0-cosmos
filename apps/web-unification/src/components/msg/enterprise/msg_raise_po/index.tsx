import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgUndPurchaseOrder } from '@models';
import { formatNumber, formatToken } from '@/utils';

const UndPurchaseOrder: FC<{ message: MsgUndPurchaseOrder }> = (props) => {
  const { message } = props;

  const amount = formatToken(message.amount.amount, message.amount.denom);
  const amountFormatted = `${formatNumber(
    amount.value,
    amount.exponent
  )} e${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUndPurchaseOrder"
        components={[<Name address={message.purchaser} name={message.purchaser} />]}
        values={{
          amount: amountFormatted,
        }}
      />
    </Typography>
  );
};

export default UndPurchaseOrder;
