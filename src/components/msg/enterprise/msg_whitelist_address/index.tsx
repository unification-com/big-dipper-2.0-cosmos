import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgWhitelistAddress } from '@models';
import { Name } from '@components';

const WhitelistAddress = (props: {
    message: MsgWhitelistAddress;
}) => {
  const { message } = props;

  let action;
  let toFrom;
  switch (message.whitelistAction) {
    case 'WHITELIST_ACTION_ADD':
      action = 'Added';
      toFrom = 'to';
      break;
    case 'WHITELIST_ACTION_REMOVE':
      action = 'Removed';
      toFrom = 'from';
      break;
    default:
      action = message.whitelistAction;
      break;
  }

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgWhitelistAddress"
        components={[
          (
            <Name
              address={message.signer}
              name={message.signer}
            />
          ),
          (
            <Name
              address={message.address}
              name={message.address}
            />
          ),
        ]}
        values={{
          action_formatted: action,
          to_from: toFrom,
        }}
      />
    </Typography>
  );
};

export default WhitelistAddress;
