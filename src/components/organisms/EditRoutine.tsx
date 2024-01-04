import { ReactNode } from "react";
import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RoutineForm from "@/components/forms/RoutineForm";
import { Routine } from "@/models/routine";

interface Props {
  routine: Routine;
  clickable?: ReactNode;
  opened?: boolean;
  close?: () => void;
}

const EditRoutine = ({ routine, clickable, opened, close }: Props) => {
  const [
    innerOpened,
    { open: innerOpen, close: innerClose }
  ] = useDisclosure(false);

  return (
    <>
      {clickable && <div onClick={innerOpen}>{clickable}</div>}
      <Modal
        title={<Text fw="bold">Edit Routine</Text>}
        opened={opened || innerOpened}
        onClose={close ?? innerClose}
      >
        <RoutineForm routine={routine} close={close ?? innerClose} />
      </Modal>
    </>
  );
};
export default EditRoutine;
