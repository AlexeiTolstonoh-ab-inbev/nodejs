console.log("start")
const readline = require('readline')
const fs = require('fs')
const data = require('./data')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Do you want to generate data ? ", function(unswer) {
    if(unswer === 'Y') {
        rl.question("How march data do you want to create ? ", function (count) {
            console.log(`we need to create ${count} objects`)
            const arrayOfData = data.randomPinsArray(new Number(count))
            rl.question("Input path to file? ", function (path) {
                console.log(`You path ${path}`)

                rl.question("What name of file do you want to create ? ", function (name) {
                    console.log(`we need to create ${name} objects`)
                    if (!(fs.existsSync(`${path}${name}`))) {
                        fs.writeFile(`${name}`,JSON.stringify(arrayOfData), (err) => {
                            if (err) throw err;
                            console.log(`The file has been saved2! ${count}`);
                            rl.close();
                        });
                    }

                        rl.question(`The path ${path}${name} exists. Do we need to rewrite this file? Y/N`, function (unswer){
                            if(unswer === `Y`){
                                fs.writeFile(`${name}`, JSON.stringify(arrayOfData), (err) => {
                                    if (err) throw err;
                                    console.log(`The file has been saved1! ${count}`);
                                    rl.close();
                                });
                            }
                            console.log('ok')
                        })
                });
            });
        });
    }
});

rl.on("close", function() {
    console.log(`sucsessful`);
    process.exit(0);
});

