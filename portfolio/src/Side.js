import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

function MySidebar() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        icon="pi pi-bars"
        onClick={() => setVisible(true)}
        className="btn"
        // label="Menu"
      />
      <Sidebar   className="sidebar"  visible={visible} onHide={() => setVisible(false)}>
        <h2>Menu</h2>
        {/* <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}
      </Sidebar>
    </div>
  );
}

export default MySidebar;
