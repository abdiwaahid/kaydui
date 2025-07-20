export const switchs = [
    {
        id: 151,
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
]