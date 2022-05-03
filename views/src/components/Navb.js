import {
  House,
  Person,
  Chat,
  Bell,
  Sliders,
  Download,
} from "react-bootstrap-icons";

const Navb = () => {
  return (
    <nav className="NavBar">
      <House size={45} className="NavIcons" />
      <Person size={45} className="NavIcons" />
      <Chat size={45} className="NavIcons" />
      <Bell size={45} className="NavIcons" />
      <Sliders size={45} className="NavIcons" />
      <Download size={45} className="NavIcons" />
    </nav>
  );
};

export default Navb;
