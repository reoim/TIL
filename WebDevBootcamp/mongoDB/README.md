### Install MongoDB with Homebrew
```
brew install MongoDB
mkdir -p /data/db
```

### Set permissions for the data directory
Ensure that user account running mongod has correct permissions for the directory:
```
sudo chown -R $USER /data/db
```
