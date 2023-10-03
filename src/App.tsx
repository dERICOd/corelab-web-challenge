import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { NewCardForm } from "./components/NewCardForm";
import { getAllTasks } from "./services/tasks"

function App() {

getAllTasks();

  return (
    <>
      <Header />
      <NewCardForm />
      <CardList />
    </>
  );
}

export default App;
