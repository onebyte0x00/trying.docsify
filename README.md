# 🚀 Welcome to CCNA Mind Maps! 

> **Interactive, visual guides for Cisco CCNA topics**  
> *Built with ❤️ using Docsify + Mermaid.js*

<div class="grid-container">
  <div class="card" onclick="window.location='mindmaps/osi-model.md'">
    <h3>🌐 OSI Model</h3>
    <p>Master the 7 layers with interactive diagrams.</p>
  </div>
  <div class="card" onclick="window.location='mindmaps/subnetting.md'">
    <h3>🔢 Subnetting</h3>
    <p>Visual cheat sheets for IP calculations.</p>
  </div>
</div>

![Cisco Network](https://i.imgur.com/Jfh9gl8.png)

## 🗂️ All Mind Maps

<div class="grid-container">
  <a href="automation.md" class="card">
    <h3>🤖 Automation</h3>
    <p>Python, Ansible, NETCONF</p>
  </a>
  <a href="ipv6.md" class="card">
    <h3>🔢 IPv6</h3>
    <p>Addressing, Transition</p>
  </a>
  <!-- Add more cards for other topics -->
</div>

```mermaid
graph LR
  A[Start Here] --> B(OSI Model)
  A --> C(Subnetting)
  B --> D[Layer 4: Transport]
  C --> E[CIDR Notation]
