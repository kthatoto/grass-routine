import { Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewRoutine = () => {
  return (
    <>
      <Button
        leftSection={<FontAwesomeIcon icon={faPlus}/>}
      >New Routine</Button>
    </>
  );
};
export default NewRoutine;
