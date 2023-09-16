---
date: "Tue, 10 Jan 2023 15:45:45 GMT"
updated: 2023-09-16 16:35:02 +08:00
tags:
  - 数据库
---

# [Debian Install](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-debian/)

```sh
sudo apt-get install gnupg curl
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/7.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

# Client

```sh
mongosh mongodb://xxx
```

```mongosh
# get help
help

# show databases
show dbs

# use database
use xxxDb

# show database functions
db.help()

# show collection functions
db.xxxCollection.help()

# count collection documents
db.xxxCollection.count()
```

# [Backup and Restore](https://www.mongodb.com/docs/manual/tutorial/backup-and-restore-tools/)

```sh
mongodump --uri "mongodb://xxx" --db xxx
```

```sh
mongorestore --uri "mongodb://xxx" ./
```

# [Create the user administrator](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#create-the-user-administrator)

```sh
mongosh
```

```mongodb
use admin
db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
```

# [Enable access control](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/#re-start-the-mongodb-instance-with-access-control)

```sh
sudo vim /etc/mongod.conf
```

[IP Binding](https://www.mongodb.com/docs/manual/core/security-mongodb-configuration/#ip-binding)

```text
net:
  port: 27017
  bindIp: 0.0.0.0

security:
    authorization: enabled
```

```sh
sudo service mongod restart

mongosh --port 27017 --authenticationDatabase "admin" -u "myUserAdmin" -p
```

# [Create user](https://www.mongodb.com/docs/manual/tutorial/create-users/#create-additional-users-for-your-deployment)

```mongodb
use test
db.createUser(
  {
    user: "myTester",
    pwd:  passwordPrompt(),   // or cleartext password
    roles: [ { role: "readWrite", db: "test" } ]
  }
)
```
