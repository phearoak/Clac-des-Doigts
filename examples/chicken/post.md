# Chicken ```POST```

Used to create a chicken.

| Method   | Url           |
| -------- | ---------------|
| `POST`   | `/chicken` |

### Parameters

#### No path parameter required

#### Body parameters

```name``` <small>string</small>&nbsp;&nbsp;&nbsp;<span style="color: orange">**Required**</span>

> Chicken's name

```weight``` <small>number</small>&nbsp;&nbsp;&nbsp;<span style="color: orange">**Required**</span>

> Chicken's weight

```steps``` <small>number</small>

> Chicken's steps

```isRunning``` <small>boolean</small>

> Chicken's steps


### HTTP response status codes

| Status   | Description           |
|----------|-----------------------|
|```200``` | OK                    |
|```401``` | Problem in request    |