import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgRecordWrkChainBlock } from '@models';

const RecordWrkChainBlock: FC<{ message: MsgRecordWrkChainBlock }> = (props) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRecordWrkChainBlock"
        components={[<Name address={message.owner} name={message.owner} />]}
        values={{
          height: String(message.height),
          block_hash: message.blockHash,
          wrkchain_id: String(message.wrkchainId),
        }}
      />
    </Typography>
  );
};

export default RecordWrkChainBlock;
