import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgRecordWrkChainBlock } from '@models';
import { Name } from '@components';

const RecordWrkChainBlock = (props: {
    message: MsgRecordWrkChainBlock;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRecordWrkChainBlock"
        components={[
          (
            <Name
              address={message.owner}
              name={message.owner}
            />
          ),
        ]}
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
