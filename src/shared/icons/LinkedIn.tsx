import { ReactComponent as LinkedInSVG } from '../../assets/svg/LinkedIn-svgrepo.svg';
type Props = {
  color?: string;
  size?: number;
  className?: string;
};
const LinkedInIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'linkedin-icon' }) => {
  return (
    <LinkedInSVG
      className={className}
      style={{  }}
    />
  );
};

export default LinkedInIcon;