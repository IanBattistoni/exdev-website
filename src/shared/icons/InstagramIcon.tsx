import { ReactComponent as InstagramSVG } from '../../assets/svg/instagram-icon.svg';
type Props = {
  color?: string;
  size?: number;
  className?: string;
};
const InstagramIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'instagram-icon' }) => {
  return (
    <InstagramSVG
      className={className}
      style={{  }}
    />
  );
};

export default InstagramIcon;