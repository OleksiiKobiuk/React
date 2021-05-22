import NonControlled from "./components/NonControlled";
import Controlled from "./components/Controlled";
import ControlledForm from "./components/ControlledForm";

export default function App() {
    return (
        <div>
        <NonControlled/>
        <hr/>
        <Controlled/>
        <hr/>
        <ControlledForm/>
        </div>
    );
}