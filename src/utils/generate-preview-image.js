import puppeteer from 'puppeteer';
import { dirname, resolve } from 'node:path';
import { components } from '../lib/code.js';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const previewsDir = resolve(__dirname, '../../public/thumbnails');
(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'],
        timeout: 0
    });

    for (const component of components) {
        try {
            const page = await browser.newPage();
            await page.goto(`http://localhost:4321/preview/${component.slug}`, {
                waitUntil: 'load',
                timeout: 0
            });
            await page.screenshot({ path: `${previewsDir}/${component.slug}.png` });
            await page.close();
        } catch (error) {
            console.log(error);

        }
    };

    await browser.close();
})();