import './error-message.scss';

interface props {
  errorText: string;
}

export const ErrorMessage = ({ errorText }: props): JSX.Element => {
  return <div className="error-message">{errorText}</div>;
};
