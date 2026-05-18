import { useTheme } from '../themes/ThemeProvider';
import styles from './Card.module.css';

/**
 * A themeable card component that adapts to the current theme
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.title
 * @param {boolean} props.elevated - Add extra elevation/shadow
 */
export const Card = ({ 
  children, 
  title,
  elevated = false,
  ...props 
}) => {
  const { theme } = useTheme();

  const cardStyle = {
    background: theme.colors.surface,
    border: `${theme.effects.borderWidth} solid ${theme.colors.border}`,
    borderRadius: theme.effects.borderRadius,
    boxShadow: elevated 
      ? `${theme.effects.shadowSize} ${theme.colors.shadow}, ${theme.effects.shadowOffset} ${theme.colors.shadow}`
      : `${theme.effects.shadowSize} ${theme.colors.shadow}`,
    backdropFilter: `blur(${theme.effects.blur})`,
  };

  return (
    <div className={styles.card} style={cardStyle} {...props}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
