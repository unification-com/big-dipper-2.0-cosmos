import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgRegisterBeacon } from '@models';

const RegisterBeacon: FC<{ message: MsgRegisterBeacon }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegisterBeacon"
        components={[<Name address={message.owner} name={message.owner} />]}
        values={{
          moniker: message.moniker,
        }}
      />
    </Typography>
  );
};

export default RegisterBeacon;
