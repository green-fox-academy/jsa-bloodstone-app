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



### Building

```js
{
  _id:ObjectID,
  type: String,
  level: Number,
  owner: Number,
}
```

#### Get buildings

Get a list of buildings

```
GET /kingdom/buildings/
```



#### Create a selected type of building

Create a new building. 

```
POST /kingdom/buildings/:buildingType
```

| param        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| buildingType | The type of building have been created<br />{ Farm, Mine, Academy } |

#### Upgrade a selected building

description

```
PUT /kingdom/troops/upgrade?id=1
```

| param | Description                               |
| ----- | ----------------------------------------- |
| id    | The ID of selected building to be upgrade |

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
