# Terminal command

## append file to file
```shell
cat file2 >> file1
```
## Symbolic link
Create symbolic link at the command-line interface
```shell
ln -s target_path link_path
```

Remove symbolic link
```shell
rm link_path
```

## rm command

`rm -r directory` - delete a directory and all its contents

`rm directorypath/*` - delete all contents in the directory

`rm -i` - ask before deleting each file

`rm -f` - forcibly delete files without asking


## list opened network port
`netstat -atp tcp | grep -i "listen"`

`lsof -Pn -i4`

`-i4` means only show ipv4 addresses and ports


# Unix command reference - [Link](http://www.statslab.cam.ac.uk/~eva/unixref.html)

## General Commands

* passwd - change your password
* exit, logout - log out
* man - display Unix manual pages

## File Handling

* emacs, pico, vi - editors
* cat > file - type in a file
* cat file - display a file
* more, less - display file a page at a time
* ls - list files
* rm - delete files
* mv - rename files
* cp - copy files
* cd - change directory
* pwd - show current directory
* mkdir - create directory
* rmdir - remove empty directory
* chmod - change access permissions on existing files
* umask - change default access permissions for new files

## Printing

* lpr - print file
* lpq - list print jobs
* lprm - cancel print jobs

## Email, WWW And Networking

* pine, mutt - read and send email
* firefox - browse the World Wide Web
* lynx - browse the World Wide Web (text only)
* ssh - connect from one machine to another securely (recommended)
* telnet, rlogin - less secure ways to connect between machines (not recommended)
* scp, ftp - transfer files between machines

## Software

* tex, latex - compile a TeX or Latex file
* xdvi - view a DVI file
* dvips - convert a DVI file to Postscript
* gv - view a Postscript file


## Process Management

* ps - list processes
* top - list all processes, starting with those taking the most CPU time
* command & - run command in the background
* nice command & - run command in the background at a reduced priority
* kill - kill a process

