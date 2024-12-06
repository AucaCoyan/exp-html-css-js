import jwt from 'jsonwebtoken';
import type { DecodeOptions } from 'jsonwebtoken';

const options: DecodeOptions = {}

const result = jwt.decode('your JWT token', options)
console.log(result)

console.log("Done!");
