import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: string[];
  onSubmit: (formData: { [key: string]: any }) => void;
}

const withCreateModal = (WrappedComponent: React.ComponentType<any>) => {
  const CreateModal = (props: any) => {
    const { open, onClose, title, onSubmit, children } = props;
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevState: any) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(formData);
    };

    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>{title}</h2>
          <form onSubmit={handleSubmit}>
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                value: formData[child.props.name] || "",
                onChange: handleInputChange,
              })
            )}
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    );
  };

  return (props: any) => (
    <React.Fragment>
      <WrappedComponent {...props} />
      <CreateModal {...props}>{props.children}</CreateModal>
    </React.Fragment>
  );
};

export default withCreateModal;
