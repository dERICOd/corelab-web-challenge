import { handleSetColorTask } from "../Card/functions/handleSetColorTask";
import { colors } from "./colors";
import { Options } from "./components/ColorButton";
import "./style.css";
export default function Modal({ taskId }: { taskId: string }) {
  return (
    <div className="modal">
      <Options.Root className="optionsList">
        {colors.map((color) => (
          <Options.List
            key={color}
            className="optionsListItems"
            style={{ background: color }}
            onClick={() => handleSetColorTask(taskId, color)}
          >
            <Options.ColorButton />
          </Options.List>
        ))}
      </Options.Root>
    </div>
  );
}
