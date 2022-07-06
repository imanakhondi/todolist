import styles from "./navBar.module.css"

const NavBar = ({ totalItems }) => {
  return <div className={styles.container}>
  <div> uncompleted Todo :</div>
    <span>{totalItems}</span>
    </div>;
};

export default NavBar;
