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
let clientsuccess = require('clientsuccess-api').clientsuccess(username, password);
```

Now you will be able to interact with the Client Success API. This API will handle refreshing your access token.
Client Success [reccomends](http://help.clientsuccess.com/advanced-features/does-clientsuccess-have-an-api) that you create a seperate user account named "API Access"

```javascript
clientsuccess.clients.list()
  .then(response => console.log(response))
  .catch(err => console.log(err));
```

## Methods

### Clients

#### List 
```javascript
clientsuccess.clients.list(params)
```
#### Create
```javascript
clientsuccess.clients.create(params)
```
#### Read
```javascript
clientsuccess.clients.read(clientId, params)
```
#### Update
```javascript
clientsuccess.clients.update(clientId, params)
```
#### Delete
```javascript
clientsuccess.clients.delete(clientId, params)
```

### Contacts

#### List
```javascript
clientsuccess.contacts.list(clientId, params)
```
#### Create
```javascript
clientsuccess.contacts.create(clientId, params)
```
#### Read
```javascript
clientsuccess.contacts.read(clientId, contactId, params)
```
#### Delete
```javascript
clientsuccess.contacts.delete(clientId, contactId, params)
```

### Contact Custom Fields
```javascript
clientsuccess.contactCustomFields(params)
```

### Interactions

#### List
```javascript
clientsuccess.interactions.list(clientId, params)
```
#### Create
```javascript
clientsuccess.interactions.create(clientId, params)
```
#### Update
```javascript
clientsuccess.interactions.update(clientId, interactionId, params)
```
#### Delete
```javascript
clientsuccess.interactions.delete(clientId, interactionId, params)
```

### Todos

#### List
```javascript
clientsuccess.todos.list(clientId, params)
```
#### Create
```javascript
clientsuccess.todos.create(clientId, params)
```
#### Update
```javascript
clientsuccess.todos.read(clientId, todoId, params)
```
#### Delete
```javascript
clientsuccess.todos.delete(clientId, todoId, params)
```

### Pulses

#### List
```javascript
clientsuccess.pulses.list(clientId, params)
```
#### Create
```javascript
clientsuccess.pulses.create(clientId, params)
```

### Employees
```javascript
clientsuccess.employees(params)
```

### Products

#### List
```javascript
clientsuccess.products.list(params)
```
#### Create
```javascript
clientsuccess.products.create(params)
```
#### Read
```javascript
clientsuccess.products.read(productId, params)
```
#### Update
```javascript
clientsuccess.products.update(productId, params)
```
#### Delete
```javascript
clientsuccess.products.delete(productId, params)
```

### Client Types
```javascript
clientsuccess.clientTypes(params)
```

### Client Statuses
```javascript
clientsuccess.clientStatuses(params)
```

### Subscriptions
```javascript
clientsuccess.subscriptions(params)
```
