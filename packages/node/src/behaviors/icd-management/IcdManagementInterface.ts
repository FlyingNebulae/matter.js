/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { IcdManagement } from "#clusters/icd-management";

export namespace IcdManagementInterface {
    export interface Base {
        /**
         * This command allows a client to request that the server stays in active mode for at least a given time
         * duration (in milliseconds) from when this command is received.
         *
         * This StayActiveDuration may be longer than the ActiveModeThreshold value and would, typically, be used by the
         * client to request the server to stay active and responsive for this period to allow a sequence of message
         * exchanges during that period. The client may slightly overestimate the duration it wants the ICD to be active
         * for, in order to account for network delays.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.17.7.4
         */
        stayActiveRequest(request: IcdManagement.StayActiveRequest): MaybePromise<IcdManagement.StayActiveResponse>;
    }

    export interface CheckInProtocolSupport {
        /**
         * This command allows a client to register itself with the ICD to be notified when the device is available for
         * communication.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.17.7.1
         */
        registerClient(request: IcdManagement.RegisterClientRequest): MaybePromise<IcdManagement.RegisterClientResponse>;

        /**
         * This command allows a client to unregister itself with the ICD. Example: a client that is leaving the network
         * (e.g. running on a phone which is leaving the home) can (and should) remove its subscriptions and send this
         * UnregisterClient command before leaving to prevent the burden on the ICD of an absent client.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.17.7.3
         */
        unregisterClient(request: IcdManagement.UnregisterClientRequest): MaybePromise;
    }

    export interface LongIdleTimeSupport {
        /**
         * This command allows a client to request that the server stays in active mode for at least a given time
         * duration (in milliseconds) from when this command is received.
         *
         * This StayActiveDuration may be longer than the ActiveModeThreshold value and would, typically, be used by the
         * client to request the server to stay active and responsive for this period to allow a sequence of message
         * exchanges during that period. The client may slightly overestimate the duration it wants the ICD to be active
         * for, in order to account for network delays.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.17.7.4
         */
        stayActiveRequest(request: IcdManagement.StayActiveRequest): MaybePromise<IcdManagement.StayActiveResponse>;
    }
}

export type IcdManagementInterface = {
    components: [
        { flags: {}, methods: IcdManagementInterface.Base },
        { flags: { checkInProtocolSupport: true }, methods: IcdManagementInterface.CheckInProtocolSupport },
        { flags: { longIdleTimeSupport: true }, methods: IcdManagementInterface.LongIdleTimeSupport }
    ]
};
