import * as dotenv from 'dotenv';

dotenv.config();

const requiredVariables = [
    'PORT'
];

for (let i = 0; i < requiredVariables.length; i += 1) {
    const envVariable = requiredVariables[i];
    if (!process.env[envVariable]) {
        throw new Error(`The env variable "${envVariable}" is not set`);
    }
}

const config = {};
export {config}
