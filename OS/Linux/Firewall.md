## Stop firewall
* `iptables -F`
* `systemctl stop firewalld`

## Disable firewall
* `systemctl disable firewalld` (시스템 reboot 해도 disable 상태 유지)