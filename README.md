# smart-axios

Another way to use axios.

## Installation

```
npm i smartAxios --save
```

## Example

```
import { smartAxios } from 'smartAxios';

smartAxios('https://jsonplaceholder.typicode.com/posts', {
  type: 'POST',
  success: (res) => console.log(res),
  failure: (err) => console.log(err),
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

## Types

- GET
- POST

### Thanks to:

- [JSONPlaceholder](https://github.com/typicode/jsonplaceholder)
