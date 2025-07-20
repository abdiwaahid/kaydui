export const toggleButtons = [
    {
        id: 201,
        name: "AI Platforms Toggle Button",
        slug: "ai-platforms-toggle-button",
        category: 3,
        code: `
        <div class=" flex justify-center items-center gap-2 my-2 bg-gray-200 rounded-full p-1 min-w-md">
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
        id: 202,
        name: "Sort Toggle Button",
        slug: "sort-toggle-button",
        category: 3,
        code: `
        <div class="inline-flex min-w-md rounded-lg border border-gray-100 bg-gray-200 p-1 transition-all duration-300 dark:border-gray-600 dark:bg-gray-900">
    <div class="w-1/3">
      <input type="radio" name="sort" class="peer sr-only" id="recent" checked />
      <label for="recent" class="peer block cursor-pointer rounded-md px-3 py-1 text-center text-sm text-gray-500 peer-checked:bg-white peer-checked:text-indigo-500 peer-checked:shadow-sm hover:text-gray-700 focus:relative md:px-4 md:py-2 dark:text-gray-400 peer-checked:dark:bg-gray-800 peer-checked:dark:text-gray-100 dark:hover:text-gray-300">Recent</label>
    </div>
    <div class="w-1/3">
      <input type="radio" name="sort" class="peer sr-only" id="popular" />
      <label for="popular" class="peer block cursor-pointer rounded-md px-3 py-1 text-center text-sm text-gray-500 peer-checked:bg-white peer-checked:text-indigo-500 peer-checked:shadow-sm hover:text-gray-700 focus:relative md:px-4 md:py-2 dark:text-gray-400 peer-checked:dark:bg-gray-800 peer-checked:dark:text-gray-100 dark:hover:text-gray-300">Popular</label>
    </div>
    <div class="w-1/3">
      <input type="radio" name="sort" class="peer sr-only" id="oldest" />
      <label for="oldest" class="peer block cursor-pointer rounded-md px-3 py-1 text-center text-sm text-gray-500 peer-checked:bg-white peer-checked:text-indigo-500 peer-checked:shadow-sm hover:text-gray-700 focus:relative md:px-4 md:py-2 dark:text-gray-400 peer-checked:dark:bg-gray-800 peer-checked:dark:text-gray-100 dark:hover:text-gray-300">Oldest</label>
    </div>
  </div>
        `
    }
]