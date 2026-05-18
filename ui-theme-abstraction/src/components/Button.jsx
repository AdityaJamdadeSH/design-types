import { useTheme } from '../themes/ThemeProvider';
import styles from './Button.module.css';

/**
 * A themeable button component that adapts to the current theme
 * @param {Object} props
 * @param {string} props.variant - 'primary', 'secondary', or 'outline'
 * @param {React.ReactNode} props.children
 * @param {Function} props.onClick
 */
export const Button = ({ 
  variant = 'primary', 
  children, 
  onClick,
  ...props 
}) => {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: theme.colors.primary,
          color: theme.colors.background,
          border: `${theme.effects.borderWidth} solid ${theme.colors.border}`,
        };
      case 'secondary':
        return {
          background: theme.colors.secondary,
          color: theme.colors.background,
          border: `${theme.effects.borderWidth} solid ${theme.colors.border}`,
        };
      case 'outline':
        return {
          background: 'transparent',
          color: theme.colors.primary,
          border: `${theme.effects.borderWidth} solid ${theme.colors.primary}`,
        };
      default:
        return {};
    }
  };

  return (
    <button
      className={styles.button}
      style={getVariantStyles()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
