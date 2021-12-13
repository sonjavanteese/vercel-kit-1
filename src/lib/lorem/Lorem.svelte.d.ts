/** @typedef {typeof __propDef.props}  LoremProps */
/** @typedef {typeof __propDef.events}  LoremEvents */
/** @typedef {typeof __propDef.slots}  LoremSlots */
export default class Lorem extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LoremProps = typeof __propDef.props;
export type LoremEvents = typeof __propDef.events;
export type LoremSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
