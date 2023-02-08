import './vertical-navigation-button.scss';

interface propTypes {
  text: string;
}

export const VerticalNavigationButton = ({ text }: propTypes): JSX.Element => {
  return <button className="vertical-navigation__button">{text}</button>;
};
