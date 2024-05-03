import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)(({ theme }) => ({
  marginTop: theme.spacing(3), // Use theme.spacing for consistent spacing
}));

const StyledButton = styled(Button)({
  borderRadius: "50%",
});

const GroupedButton = () => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <Button>1</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
