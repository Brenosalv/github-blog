import { Container } from "./styles";

export function Input({ ...htmlInputAttributes }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container
      {...htmlInputAttributes}
    />
  )
}