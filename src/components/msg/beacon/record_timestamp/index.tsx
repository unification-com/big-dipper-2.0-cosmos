import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgRecordBeaconTimestamp } from '@models';
import {Name} from "@components";

const RecordBeaconTimestamp = (props: {
    message: MsgRecordBeaconTimestamp;
}) => {
    const { message } = props;

    return (
        <Typography>
            <Trans
                i18nKey="message_contents:MsgRecordBeaconTimestamp"
                components={[
                    (
                        <Name
                            address={message.owner}
                            name={message.owner}
                        />
                    ),
                ]}
                values={{
                    hash: message.hash,
                    beacon_id: message.beacon_id,
                }}
            />
        </Typography>
    );
};

export default RecordBeaconTimestamp;
