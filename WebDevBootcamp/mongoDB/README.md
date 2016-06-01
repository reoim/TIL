### Install MongoDB with Homebrew
```
brew install MongoDB
mkdir -p /data/db
```

### Set permissions for the data directory
Ensure that user account running mongod has correct permissions for the directory
<br>
Check ownership of the directory
```
ls -ld /data/db
```
Change ownership of the directory
```
sudo chown -R $USER /data/db
```
