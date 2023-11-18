const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (error, addresses) => {
    if (error) {
        console.error(`Error resolving ${domainName}: ${error.message}`);
    } else {
        console.log(`IP address of ${domainName}:`);
        addresses.forEach((address) => {
            console.log(`\t  ${address}`);
        });
    }
});