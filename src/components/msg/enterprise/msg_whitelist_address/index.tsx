import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { MsgWhitelistAddress } from '@models';
import {Name} from "@components";

const WhitelistAddress = (props: {
    message: MsgWhitelistAddress;
}) => {
    const { message } = props;

    let action;
    let to_from;
    switch(message.whitelist_action) {
        case "WHITELIST_ACTION_ADD":
            action = "Added";
            to_from = "to";
            break;
        case "WHITELIST_ACTION_REMOVE":
            action = "Removed";
            to_from = "from";
            break;
        default:
            action = message.whitelist_action;
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
                    to_from,
                }}
            />
        </Typography>
    );
};

export default WhitelistAddress;

