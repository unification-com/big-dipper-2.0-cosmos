import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgRecordBeaconTimestamp } from '@/models';

const RecordBeaconTimestamp: FC<{ message: MsgRecordBeaconTimestamp }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRecordBeaconTimestamp"
        components={[<Name address={message.owner} name={message.owner} />]}
        values={{
          hash: message.hash,
          beacon_id: String(message.beaconId),
        }}
      />
    </Typography>
  );
};

export default RecordBeaconTimestamp;
