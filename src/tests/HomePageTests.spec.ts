import {test,Page} from '@playwright/test'

test('Verify the user navigation to Home page.',async({page})=>{
    await page.goto(BASE_URL);
})

test('Verify the user navigation to Login page',async({page})=>{
    await page.goto(BASE_URL);
});