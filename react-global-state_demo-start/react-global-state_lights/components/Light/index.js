import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, onToggle }) {
  //const [isOn, setIsOn] = useState(false);

  /* function handleToggle() {
    setIsOn((isOn) => !isOn);
  }
 */
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(light.id);
      }}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
