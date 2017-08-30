# Client Success
A 3rd party node.js library that implements the [ClientSuccess](https://www.clientsuccess.com/) API.

[Documentation](http://docs.clientsuccessapi.apiary.io/#reference)

## Instalation
```bash
npm i clientsuccess-api
```

## Usage

This library uses [axios](https://github.com/mzabriskie/axios) to send HTTP request. All methods will expose the underlying `config` parameter for `axios`

Begin by initializing with your username and password. 

```javascript
let abode = require('abode-api').abode(username, password);

abode.mode.status()
  .then(response => console.log(response))
  .catch(err => console.log(err));
```

## Methods

### Modes


#### Home 
```javascript
abode.mode.home()
```

#### Away
```javascript
abode.mode.away()
```

#### Standby
```javascript
abode.mode.standby()
```

### Panel
```javascript
abode.mode.panel()
```

### Devices
```javascript
abode.mode.devices()
```

### Associates
```javascript
abode.mode.associates()
```
