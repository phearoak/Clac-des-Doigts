# Action ```PATCH```

Used to update an action.

| Method   | Url           |
| -------- | ---------------|
| `PATCH`   | `/chicken/:id` |

### Parameters

#### Path parameter

```id``` <small>number</small>&nbsp;&nbsp;&nbsp;<span style="color: orange">**Required**</span>

> Chicken's id to update

#### Body parameters

```name``` <small>string</small>

> Chicken's name

```weight``` <small>number</small>

> Chicken's weight

```steps``` <small>number</small>

> Chicken's steps

```isRunning``` <small>boolean</small>

> Chicken's isRunning

### HTTP response status codes

| Status   | Description           |
|----------|-----------------------|
|```200``` | OK                    |
|```401``` | Problem in request    |