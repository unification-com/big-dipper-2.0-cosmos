import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgRegisterWrkChain } from '@models';

const RegisterWrkChain: FC<{ message: MsgRegisterWrkChain }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRegisterWrkChain"
        components={[<Name address={message.owner} name={message.owner} />, <b />]}
        values={{
          moniker: message.moniker,
        }}
      />
    </Typography>
  );
};

export default RegisterWrkChain;
