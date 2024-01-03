import { ReactNode } from "react";
import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RoutineForm from "@/components/forms/RoutineForm";
import { Routine } from "@/models/routine";

interface Props {
  routine: Routine;
  clickable: ReactNode;
}

const EditRoutine = ({ routine, clickable }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div onClick={open}>
        {clickable}
      </div>
      <Modal
        title={<Text fw="bold">Edit Routine</Text>}
        opened={opened}
        onClose={close}
      >
        <RoutineForm routine={routine} close={close} />
      </Modal>
    </>
  );
};
export default EditRoutine;
