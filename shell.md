# Find text and Change in multiple files
```shell
#!/bin/bash

# find all app.js file in any directory that include bmt-sdk in name. ex> bmt-sdk1, bmt-sdk2, bmt-sdkrandome
for s in ./bmt-sdk*/app.js 
# do something to the source files from for loop results
do
# findtext -> changetext.  in linux, use -i option. in mac, use -it option.
  sed -i 's/findtext/changetext/g' $s
done
```

# Copy and paste multiple directories and change text in certain file of each directory
ex> create folder bmt-sdk1 ~ bmt-sdk60 and change port in each app.js file
```shell
#!/bin/bash

for i in {1..60}
do
        yes | cp -rf /app/bmt-sdk1 /app/bmt-sdk${i}

        sed -i "s/localhost:61001/localhost:610$((i+1))/" /app/bmt-sdk${i}/app.js
done
```

