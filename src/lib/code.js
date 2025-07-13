
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
    {
        id: 1,
        name: "Button",
        slug: "button",
        category: 1,
        code: `
            <button id="copy" class=" w-xs cursor-pointer flex  items-center justify-center gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium transition-colors bg-gray-100 text-gray-700 dark:bg-gray-900/95 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-900/80">
                            <span class="text-base">📋</span>
                            Copy to Clipboard
                        </button>
        `
    },
    {
        id: 2,
        name: "Custom Radio",
        slug: "custom-radio",
        category: 5,
        code: `
        <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-3">Content to Export</label>
                        <div class="space-y-3">
                            <label
                                class="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer radio-option">
                                <input type="radio" name="content" value="all" checked class="peer sr-only">
                                <div class="peer w-4 h-4 border-2 border-gray-300 rounded-full relative peer-checked:bg-purple-600 peer-checked:border-purple-600 peer-checked:after:content-[''] peer-checked:after:w-1.5 peer-checked:after:h-1.5 peer-checked:after:bg-gray-200 peer-checked:after:absolute peer-checked:after:top-[50%] peer-checked:after:left-[50%] peer-checked:after:-translate-x-[50%] peer-checked:after:-translate-y-[50%] peer-checked:after:rounded-full">
                                </div>
                                <span class="text-sm text-gray-700 dark:text-gray-100">All Messages</span>
                            </label>
                            <label
                                class="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer radio-option">
                                <input type="radio" name="content" value="ai" class="peer sr-only">
                                <div class="peer w-4 h-4 border-2 border-gray-300 rounded-full relative peer-checked:bg-purple-600 peer-checked:border-purple-600 peer-checked:after:content-[''] peer-checked:after:w-1.5 peer-checked:after:h-1.5 peer-checked:after:bg-gray-200 peer-checked:after:absolute peer-checked:after:top-[50%] peer-checked:after:left-[50%] peer-checked:after:-translate-x-[50%] peer-checked:after:-translate-y-[50%] peer-checked:after:rounded-full">
                                </div>
                                <span class="text-sm text-gray-700 dark:text-gray-100">AI Messages Only</span>
                            </label>
                            <label
                                class="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer radio-option">
                                <input type="radio" name="content" value="user" class="peer sr-only">
                                <div class="peer w-4 h-4 border-2 border-gray-300 rounded-full relative peer-checked:bg-purple-600 peer-checked:border-purple-600 peer-checked:after:content-[''] peer-checked:after:w-1.5 peer-checked:after:h-1.5 peer-checked:after:bg-gray-200 peer-checked:after:absolute peer-checked:after:top-[50%] peer-checked:after:left-[50%] peer-checked:after:-translate-x-[50%] peer-checked:after:-translate-y-[50%] peer-checked:after:rounded-full">
                                </div>
                                <span class="text-sm text-gray-700 dark:text-gray-100">User Messages Only</span>
                            </label>
                        </div>
                    </div>
        `
    },
    {
        id: 3,
        name: "Toggle Button",
        slug: "toggle-button",
        category: 3,
        code: `
        <div class=" flex justify-center items-center gap-2 my-2 bg-gray-200 rounded-full p-1 ">
                <div class="w-1/4">
                    <input type="radio" id="gemini" name="aiPlatform" value="gemini" class="peer sr-only" checked />
                    <label for="gemini"
                        class="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-indigo-600 peer-checked:font-bold peer-checked:text-white transition-colors duration-300">
                        Gemini
                    </label>
                </div>
                <div class="w-1/4">
                    <input type="radio" id="grok" name="aiPlatform" value="grok" class="peer sr-only" />
                    <label for="grok"
                        class="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-indigo-600 peer-checked:font-bold peer-checked:text-white transition-colors duration-300">Grok</label>
                </div>
                <div class="w-1/4">
                    <input type="radio" id="chatgpt" name="aiPlatform" value="chatgpt" class="peer sr-only" />
                    <label for="chatgpt"
                        class="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-indigo-600 peer-checked:font-bold peer-checked:text-white transition-colors duration-300">ChatGPT</label>
                </div>
                <div class="w-1/4">
                    <input type="radio" id="claude" name="aiPlatform" value="claude" class="peer sr-only" />
                    <label for="claude"
                        class="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-indigo-600 peer-checked:font-bold peer-checked:text-white transition-colors duration-300">Claude</label>
                </div>
            </div>
        `
    },
    {
        id: 4,
        name: 'Switch with label',
        slug: 'switch-label',
        category: 8,
        code: `
                    <div class="mb-0">
                        <label class="flex items-center justify-between cursor-pointer gap-2">
                            <span class="text-sm font-medium text-gray-700 dark:text-gray-100">Include Timestamps</span>
                            <label class="relative inline-flex cursor-pointer items-center">
                                <input id="includeTimestamps" type="checkbox" class="peer sr-only" />
                                <label for="includeTimestamps" class="hidden"></label>
                                <div
                                    class="peer h-6 w-11 rounded-full  bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300">
                                </div>
                            </label>
                        </label>
                    </div>
        `
    }
];