# smart-axios

An way to standardize the use of axios.

## Installation

```
npm i smartAxios
```

##

## Instructions

### GET

```
import { smartAxios } from 'smartAxios';

smartAxios(REQUEST_ROUTE, {
  type: 'GET',
  success: (res) => SUCCESS_METHOD(res),
  failure: (err) => FAIL_METHOD(err),
});
```

### POST

```
import { smartAxios } from 'smartAxios';

smartAxios(REQUEST_ROUTE, {
  type: 'POST',
  success: (res) => SUCCESS_METHOD(res),
  failure: (err) => FAILURE_METHOD(err),
  body: {
    title: 'Title Lorem',
    body: 'Body lorem.',
  },
});
```

### If I need to add a header ?

Just add an **options** prop into the request body (see an example below):

```
smartAxios(REQUEST_ROUTE, {
  type: 'POST',
  success: (res) => SUCCESS_METHOD(res),
  failure: (err) => FAILURE_METHOD(err),
  body: {
    title: 'Title Lorem',
    body: 'Body lorem.',
  },
  options: {
    headers: {
      Authentication: 'Bearer fkskfjhsdfhdskjfhsdjkfhdkjshfsdjhkk',
    },
  },
});
```

### A react use case example

If you need to set a trigger action, set it using the **action** prop.

```
smartAxios(REQUEST_ROUTE, {
  type: 'GET',
  action: GET_ACTION()
  success: (res) => GET_SUCCESS(res),
  failure: (err) => GET_FAIL(err),
});
```

### Core team

- [cl4pper](https://github.com/cl4pper)
- [Samuel Almeida](https://github.com/samuelalmeida-dev)
