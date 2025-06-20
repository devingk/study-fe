import StoppingPropagation from "./StoppingPropagation";
import Button from "./Button";
import Propagation from "./Propagation";
import Toolbar from "./Toolbar";
import PreventingDefaultBehavior from "./PreventingDefaultBehavior";

export default function Event() {
  return (
    <>
      <h1>Event Practice</h1>
      <Button />
      <h2>Toolbar</h2>
      <Toolbar />
      <h2>Propagation</h2>
      <Propagation />
      <h2>Stopping Propagation</h2>
      <StoppingPropagation />
      <h2>Preventing Default Behavior</h2>
      <PreventingDefaultBehavior />
    </>
  );
}
