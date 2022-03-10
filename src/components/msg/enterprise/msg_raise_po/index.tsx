import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgUndPurchaseOrder } from '@models';
import {Name} from "@components";
import {formatNumber, formatToken} from "@utils/format_token";

const UndPurchaseOrder = (props: {
    message: MsgUndPurchaseOrder;
}) => {
    const { message } = props;

    const amount = formatToken(message.amount.amount, message.amount.denom);
    const amountFormatted = `${formatNumber(amount.value, amount.exponent)} e${amount.displayDenom.toUpperCase()}`;

    return (
        <Typography>
            <Trans
                i18nKey="message_contents:MsgUndPurchaseOrder"
                components={[
                    (
                        <Name
                            address={message.purchaser}
                            name={message.purchaser}
                        />
                    ),
                ]}
                values={{
                    amount: amountFormatted,
                }}
            />
        </Typography>
    );
};

export default UndPurchaseOrder;
