import {test as BaseTest} from '@playwright/test'
import { Home } from '@pages/Home.page';
import { SignIn } from '@pages/SignIn.page';
import { Contact } from '@pages/Contact.page';

const test = BaseTest.extend<{
    home:Home;
    contact:Contact;
    signIn:SignIn;
}>({
    home:async({page}, use)=>{
        await use(new Home(page));
    },
    contact:async({page}, use)=>{
        await use(new Contact(page));
    },
    signIn:async({page}, use)=>{
        await use(new SignIn(page));
    }
})

export default test;