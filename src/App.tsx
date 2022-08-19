import styles from "./App.module.css";
import { Statistics } from "./components/statistics";

function App() {
  return (
    <div className={styles.app}>
      <Statistics />
    </div>
  );
}
export default App;
