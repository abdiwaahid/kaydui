import { buttons } from "./components/buttons.js";
import { inputs } from "./components/inputs.js";
import { radios } from "./components/radios.js";
import { switchs } from "./components/switchs.js";
import { toggleButtons } from "./components/toggle-buttons.js";
export const categories = [
    {
        id: 1,
        name: "Buttons",
        slug: "buttons",
        icon: "",
    },
    {
        id: 2,
        name: "Button Group",
        slug: "button-group",
        icon: "",
    },
    {
        id: 3,
        name: "Toggle Button",
        slug: "toggle-button",
        icon: "",
    },
    {
        id: 4,
        name: "Inputs",
        slug: "inputs",
        icon: "",
    },
    {
        id: 5,
        name: "Radio",
        slug: "radio",
        icon: "",
    },
    {
        id: 6,
        name: "Checkbox",
        slug: "checkbox",
        icon: "",
    },
    {
        id: 7,
        name: "Select",
        slug: "select",
        icon: "",
    },
    {
        id: 8,
        name: "Switch",
        slug: "switch",
        icon: "",
    },
    {
        id: 9,
        name: "Alerts",
        slug: "alerts",
        icon: "",
    },
    {
        id: 10,
        name: "Badges",
        slug: "badges",
        icon: "",
    },
    {
        id: 11,
        name: "Cards",
        slug: "cards",
        icon: "",
    },
    {
        id: 12,
        name: "Typography",
        slug: "typography",
        icon: "",
    },

];

export const components = [
    ...buttons,
    ...toggleButtons,
    ...inputs,
    ...radios,
    ...switchs,
];