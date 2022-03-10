import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRegisterWrkChain } from '@models';

const RegisterWrkChain = (props: {
    message: MsgRegisterWrkChain;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegisterWrkChain"
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

export default RegisterWrkChain;
