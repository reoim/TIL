# Find text and Change in multiple files
```shell
#!/bin/bash

# find all app.js file in any directory that include bmt-sdk in name. ex> bmt-sdk1, bmt-sdk2, bmt-sdkrandome
for s in ./bmt-sdk*/app.js 
# do something to the source files from for loop results
do
# findtext -> changetext.  in linux, use -i option. in mac, use -it option.
  sed -it 's/findtext/changetext/g' $s
done
```


