/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../behaviors/identify/IdentifyServer.js";
import { GroupsServer as BaseGroupsServer } from "../behaviors/groups/GroupsServer.js";
import { OnOffServer as BaseOnOffServer } from "../behaviors/on-off/OnOffServer.js";
import { LevelControlServer as BaseLevelControlServer } from "../behaviors/level-control/LevelControlServer.js";
import { ColorControlServer as BaseColorControlServer } from "../behaviors/color-control/ColorControlServer.js";
import {
    ScenesManagementServer as BaseScenesManagementServer
} from "../behaviors/scenes-management/ScenesManagementServer.js";
import {
    OccupancySensingBehavior as BaseOccupancySensingBehavior
} from "../behaviors/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../endpoint/type/MutableEndpoint.js";
import { SupportedBehaviors } from "../endpoint/properties/SupportedBehaviors.js";
import { Identity } from "#general";

/**
 * A Color Temperature Light is a lighting device that is capable of being switched on or off, the intensity of its
 * light adjusted, and its color temperature adjusted by means of a bound controller device such as a Color Dimmer
 * Switch.
 *
 * @see {@link MatterSpecification.v141.Device} § 4.3
 */
export interface ColorTemperatureLightDevice extends Identity<typeof ColorTemperatureLightDeviceDefinition> {}

export namespace ColorTemperatureLightRequirements {
    /**
     * The Identify cluster is required by the Matter specification.
     *
     * This version of {@link IdentifyServer} is specialized per the specification.
     */
    export const IdentifyServer = BaseIdentifyServer.alter({ commands: { triggerEffect: { optional: false } } });

    /**
     * The Groups cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link GroupsServer} for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The OnOff cluster is required by the Matter specification.
     *
     * This version of {@link OnOffServer} is specialized per the specification.
     */
    export const OnOffServer = BaseOnOffServer.with("Lighting");

    /**
     * The LevelControl cluster is required by the Matter specification.
     *
     * This version of {@link LevelControlServer} is specialized per the specification.
     */
    export const LevelControlServer = BaseLevelControlServer
        .with("OnOff", "Lighting")
        .alter({
            attributes: {
                currentLevel: { min: 1, max: 254 },
                minLevel: { default: 1, min: 1, max: 2 },
                maxLevel: { default: 254, min: 254, max: 255 }
            }
        });

    /**
     * The ColorControl cluster is required by the Matter specification.
     *
     * This version of {@link ColorControlServer} is specialized per the specification.
     */
    export const ColorControlServer = BaseColorControlServer
        .with("ColorTemperature")
        .alter({ attributes: { remainingTime: { optional: false } } });

    /**
     * The ScenesManagement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ScenesManagementServer} for convenience.
     */
    export const ScenesManagementServer = BaseScenesManagementServer;

    /**
     * The OccupancySensing cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link OccupancySensingBehavior} for convenience.
     */
    export const OccupancySensingBehavior = BaseOccupancySensingBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            Identify: IdentifyServer,
            Groups: GroupsServer,
            OnOff: OnOffServer,
            LevelControl: LevelControlServer,
            ColorControl: ColorControlServer
        },

        optional: { ScenesManagement: ScenesManagementServer }
    };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { OccupancySensing: OccupancySensingBehavior }, mandatory: {} };
}

export const ColorTemperatureLightDeviceDefinition = MutableEndpoint({
    name: "ColorTemperatureLight",
    deviceType: 0x10c,
    deviceRevision: 4,
    requirements: ColorTemperatureLightRequirements,

    behaviors: SupportedBehaviors(
        ColorTemperatureLightRequirements.server.mandatory.Identify,
        ColorTemperatureLightRequirements.server.mandatory.Groups,
        ColorTemperatureLightRequirements.server.mandatory.OnOff,
        ColorTemperatureLightRequirements.server.mandatory.LevelControl,
        ColorTemperatureLightRequirements.server.mandatory.ColorControl
    )
});

export const ColorTemperatureLightDevice: ColorTemperatureLightDevice = ColorTemperatureLightDeviceDefinition;
