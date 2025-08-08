# VLANs (Virtual LANs)
```mermaid
mindmap
  root((VLANs))
    Benefits
      Segmentation: Security
      Broadcast Control
    Types
      Data VLAN: User traffic
      Native VLAN: Untagged
      Management VLAN: SSH access
    Trunking
      Protocol: 802.1Q
      Tagging: Adds VLAN ID
    Configuration
      Switchport mode access/trunk
      "show vlan brief"
