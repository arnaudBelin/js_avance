import fs from 'fs';

export const readJSON = fileName => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(fileName, { encoding: 'utf8' },
                (err, data) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
        }
    );
}

export const average = (data, precision = 2 ) => {
    if (data.length === 0) {

        throw new Error('Empty data');
    }

    const power = 10**precision;

    return Math.floor((data.reduce((acc, curr) => acc + curr) / data.length) * power) / power;
}