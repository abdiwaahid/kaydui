export const radios = [
    {
        id: 101,
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
]