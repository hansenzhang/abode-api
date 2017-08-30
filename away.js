'use strict';

require('dotenv').config();

let abode = require('./lib').abode(process.env.USERNAME, process.env.PASSWORD);

abode.mode.away()
	.then(response => console.log('res', response.data))
	.catch(err => console.log('err', err.response.data));
