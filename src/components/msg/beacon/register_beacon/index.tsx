import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRegisterBeacon } from '@models';

const RegisterBeacon = (props: {
    message: MsgRegisterBeacon;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegisterBeacon"
        components={[
          (
            <Name
              address={message.owner}
              name={message.owner}
            />
          ),
          <b />,
        ]}
        values={{
          moniker: message.moniker,
        }}
      />
    </Typography>
  );
};

export default RegisterBeacon;
