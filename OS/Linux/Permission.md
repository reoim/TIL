# Type of file permission
* **User** permissions. These permissions apply to a single user who has special access to the file. This user is called the **owner**.
* **Group** permissions. These apply to a single group of users who have access to the file. This group is the **owning group**.
* **Other** permissions. These apply to every other user on the system. These users are known as **others**, or **the world**.

#chown
* Change ownership of files and directories in a linux file system.
```
chown [-c|--changes] [-v|--verbose] [-f|--silent|--quiet] [--dereference]
      [-h|--no-dereference] [--preserve-root]
      [--from=currentowner:currentgroup] [--no-preserve-root]
      [-R|--recursive] [--preserve-root] [-H] [-L] [-P]
      {new-owner|--reference=ref-file} file ...
```

                                                     
| new-owner form | Description                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| user           | The name of the user to own the file. In this form, the colon `:` and the group is omitted. The owning group is not altered.                     |
| user:group     | The user and group to own the file, separated by a colon, with no spaces in between.                                                             |
| :group         | The group to own the file. In this form, user is omitted, and the group must be preceded by a colon.                                             |
| user:          | If group is omitted, but a colon follows user, the owner is changed to user, and the owning group is changed to the login group of user.         |
| :              | Specifying a colon with no user or group is accepted, but ownership will not be changed. This form does not cause an error, but changes nothing. |

#chmod
Change the permissions of files or directories.

The letters **u**, **g**, and **o** stand for **user**, **group** and **other**.

* **4** stands for `read`
* **2** stands for `write`
* **1** stands for `execute`
* **0** stands for `no permission`

```shell
chmod u=rwx,g=rx,o=r myfile
```
```shell
chmod 754 myfile
```