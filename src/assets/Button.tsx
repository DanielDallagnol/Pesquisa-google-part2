import Button from '@mui/material/Button';

interface ButtonsProps {
  label: string;
}

export default function Buttons({ label }: ButtonsProps) {
  return (
    
    <Button variant="contained">{label}</Button>

  );
}


