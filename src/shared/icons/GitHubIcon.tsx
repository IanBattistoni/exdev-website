import { ReactComponent as GitHubSVG } from '../../assets/svg/Github-svgrepo.svg';
type Props = {
  color?: string;
  size?: number;
  className?: string;
};
const GitHubIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'github-icon' }) => {
  return (
    <GitHubSVG
      className={className}
      style={{  }}
    />
  );
};

export default GitHubIcon;