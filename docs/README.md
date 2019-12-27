## Documentation

### User

```js
{
  uid: ObjectID,
  username: String,
  email: String,
  password: String,
  kingdomName: String
}
```

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
