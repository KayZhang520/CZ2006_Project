import PreferenceForm from ".//PreferenceForm";
import RequirementsForm from ".//RequirementsForm.js";
import InformationForm from ".//InformationForm.js";

export default function UserForm(props) {
  switch (props.step) {
    case 1:
      return <RequirementsForm></RequirementsForm>;
    case 2:
      return <InformationForm></InformationForm>;
    case 3:
      return <PreferenceForm></PreferenceForm>;
  }
}
