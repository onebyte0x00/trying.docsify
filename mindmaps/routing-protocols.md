# Routing Protocols
```mermaid
mindmap
  root((Routing Protocols))
    Static Routing
      Manual configuration
      Use Case: Small networks
    Dynamic Routing
      Distance Vector
        RIP: Hop count, slow
        EIGRP: Cisco proprietary
      Link State
        OSPF: Fast, Dijkstra algorithm
        IS-IS: ISP backbone
      Path Vector
        BGP: Internet routing
    Administrative Distance
      Direct Connect: 0
      OSPF: 110
      RIP: 120
