# 🌐 CCNA Mind Maps - Interactive Networking Guide

> **Visual learning resources for Cisco CCNA certification**  
> *All mind maps live in the `/mindmaps/` directory*

<div class="grid-container">
  <a href="mindmaps/osi-model.md" class="card">
    <h3>🌐 OSI Model</h3>
    <p>7 Layers visualized with protocols</p>
  </a>
  <a href="mindmaps/subnetting.md" class="card">
    <h3>🔢 Subnetting</h3>
    <p>CIDR, VLSM, and cheat sheets</p>
  </a>
  <a href="mindmaps/routing-protocols.md" class="card">
    <h3>🛣️ Routing Protocols</h3>
    <p>OSPF, EIGRP, BGP comparisons</p>
  </a>
  <a href="mindmaps/vlans.md" class="card">
    <h3>🏷️ VLANs</h3>
    <p>Trunking, VTP, and configuration</p>
  </a>
  <a href="mindmaps/ipv6.md" class="card">
    <h3>🔷 IPv6</h3>
    <p>Address types and transition tech</p>
  </a>
  <a href="mindmaps/security.md" class="card">
    <h3>🔒 Security</h3>
    <p>ACLs, Firewalls, VPNs</p>
  </a>
</div>

## 📚 All Mind Maps
| Category       | Topics |
|---------------|--------|
| **Fundamentals** | [OSI Model](mindmaps/osi-model.md), [TCP/IP Model](mindmaps/tcp-ip-model.md) |
| **IP Networking** | [Subnetting](mindmaps/subnetting.md), [IPv6](mindmaps/ipv6.md) |
| **Routing** | [Routing Protocols](mindmaps/routing-protocols.md), [Troubleshooting](mindmaps/troubleshooting.md) |
| **Switching** | [VLANs](mindmaps/vlans.md), [Wireless](mindmaps/wireless.md) |
| **Advanced** | [Automation](mindmaps/automation.md), [Security](mindmaps/security.md) |

## 🛠️ How to Use
1. **Browse** mind maps via sidebar or cards above
2. **Search** with `Ctrl+K` (Docsify search)
3. **Edit** files in `/mindmaps/` directory

```mermaid
flowchart LR
  A[Start Here] --> B(OSI Model)
  A --> C(Subnetting)
  B --> D[Layer 4: Transport]
  C --> E[CIDR Notation]




### Key Features:
1. **Proper Pathing**: All links use `mindmaps/filename.md` format
2. **Two Navigation Options**:
   - Card grid for visual learners
   - Table for quick reference
3. **Mermaid Diagram**: Shows relationships between topics
4. **Directory Notice**: Clearly states where files are stored

### Recommended CSS (add to your `index.html`):
```html
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .card {
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    padding: 1.2rem;
    transition: all 0.3s ease;
  }
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 80, 115, 0.15);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  table td, table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
</style>
