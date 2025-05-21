import Button from '@mui/material/Button';

interface ButtonsProps {
  onClick: () => void;
  texto: string;
}

export default function Buttons({onClick, texto }: ButtonsProps) {
  return (
    
    <Button variant="contained" onClick={onClick}>{texto}</Button>

  );
}


