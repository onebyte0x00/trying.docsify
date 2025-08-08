# IP Subnetting
```mermaid
mindmap
  root((Subnetting))
    CIDR Notation
      /24 = 255.255.255.0
      /30 = 255.255.255.252
    Classful Networks
      Class A: 1-126
      Class B: 128-191
      Class C: 192-223
    Subnet Mask
      Binary: 1s = Network, 0s = Host
      Example: 255.255.255.192 → /26
    Calculating Subnets
      Hosts: 2^n - 2
      Subnets: 2^m
    Special Addresses
      Network ID: First address
      Broadcast: Last address
