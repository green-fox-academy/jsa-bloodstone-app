## Documentation

### User

```js
{
  uid: ObjectId,
  username: String,
  email: String,
  password: String,
  kingdomName: String
}
```



#### Get a user

Get a specified user by id

```
GET /users/1
```



#### Register a user

Register a user by giving some informations

```
POST /users/register
```



##### Request

```json
{
  "username": "kyya",
  "password": "233qwq"
}
```



### Setting

#### Reset user information

```
PATCH /users/setting
```



##### Request

```json
ex.:
{
  "username": "kyya",
  "email": "kyya@gmail.com",
  "password": "233qwq",
  "kingdomName": "Kyya's Kingdom"
}
```



### Building

```js
{
  _id: ObjectId,
  type: String,
  level: Number,
  owner: ObjectId,
}
```



#### Get buildings

Get a list of buildings

```
GET /kingdom/buildings/
```



#### Create a new building

Create a new building with selected type. 

```
POST /kingdom/buildings/:buildingType
```

| param        | Description                                                |
| ------------ | ---------------------------------------------------------- |
| buildingType | The type of building have been created<br />{ Farm, Mine } |

#### Get a building with id

description

```
POST /kingdom/buildings/:buildingId
```

| param      | Description                               |
| ---------- | ----------------------------------------- |
| buildingId | The ID of selected building to be upgrade |

#### Upgrade a building with id

description

```
PUT /kingdom/buildings/:buildingId/upgrade
```

| param      | Description                               |
| ---------- | ----------------------------------------- |
| buildingId | The ID of selected building to be upgrade |



### Troop

```js
// CountOfLevel
{
  level: Number,
  count: Number
}

// TroopModel
{
  _id: ObjectID,
  owner: ObjectID,// reference User's uid
  countByLevel: [CountOfLevel]

  // virtual
  attack: Number,
  defence: Number,
  hp: Number
}
```



#### Get troops

Get a list of troops

```
GET /kingdom/troops/
```



#### Create a unit of troop

Create a new unit of troop. 

```
POST /kingdom/troops/?level=1
```

| param | Description                                   |
| ----- | --------------------------------------------- |
| level | The number of level to create a unit of troop |



#### Upgrade a unit of troop

description

```
PUT /kingdom/troops/upgrade?level=1
```

| param | Description                                    |
| ----- | ---------------------------------------------- |
| level | The number of level to upgrade a unit of troop |



#### Start a battle between troops

description

```
POST /kingdom/troops/battle?uid=12
```
| param | Description                            |
| ----- | -------------------------------------- |
| uid   | The id of enemy who you want to battle |