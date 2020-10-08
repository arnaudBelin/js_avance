import { readJSON, average } from './utils.js';
import fs from 'fs';

readJSON('./data/matrix.json').then(
    ({ matrix }) => {
        const normalizeMatrix = matrix.map((line, i) => {
            const avg = average(line.filter(num => num != 'None'), 1);

            return line.map((row, j) => {
                if (row === 'None') return avg;

                return row;
            })
        });
        
        console.log(normalizeMatrix);

        fs.writeFile(
            './data/normalizeMatrix.json',
            JSON.stringify({ matrix: normalizeMatrix }),
            { encoding: 'utf8' }, err => console.error(err)
        )
    }
)