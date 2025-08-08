# Network Security
```mermaid
mindmap
  root((Security))
    ACLs (Access Control Lists)
      Standard: Source IP only
      Extended: Source/Dest IP, Port
    Firewalls
      Stateful: Tracks connections
      ASA: Cisco firewall
    VPNs
      Site-to-Site: IPsec
      Remote Access: SSL-VPN
    Threats
      DDoS: Traffic flood
      MITM: Packet sniffing
    Mitigation
      Port Security
      DHCP Snooping
