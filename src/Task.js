import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle}) {
    return (
      <div className={"task " + (done?"done":"not-done")}>
        <Checkbox checked={done} onClick={() => onToggle(!done)} />
        <span>{name}</span>
      </div>
    );
}