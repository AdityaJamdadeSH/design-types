import { useTheme } from './themes/ThemeProvider';
import styles from './App.module.css';

function App() {
  const { theme, currentThemeName, changeTheme, availableThemes, canSwitchTheme } = useTheme();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>UI Theme Abstraction</h1>
        <p className={styles.subtitle}>
          Current Theme: <strong>{theme.name}</strong>
        </p>
        <p className={styles.description}>{theme.description}</p>
      </header>

      {canSwitchTheme && (
        <section className={styles.themeSelector}>
          <h2>Select Theme</h2>
          <div className={styles.themeGrid}>
            {availableThemes.map((themeName) => (
              <button
                key={themeName}
                className={`${styles.themeButton} ${currentThemeName === themeName ? styles.active : ''}`}
                onClick={() => changeTheme(themeName)}
              >
                {themeName.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className={styles.showcase}>
        <h2>Design Showcase</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Card Component</h3>
            <p>This is a sample card component styled with the current theme.</p>
            <button className={styles.button}>Primary Button</button>
          </div>

          <div className={styles.card}>
            <h3>Typography</h3>
            <p className={styles.textLarge}>Large text example</p>
            <p>Normal text example</p>
            <p className={styles.textSmall}>Small text example</p>
          </div>

          <div className={styles.card}>
            <h3>Colors</h3>
            <div className={styles.colorGrid}>
              <div className={styles.colorBox} style={{ background: theme.colors.primary }}>
                <span>Primary</span>
              </div>
              <div className={styles.colorBox} style={{ background: theme.colors.secondary }}>
                <span>Secondary</span>
              </div>
              <div className={styles.colorBox} style={{ background: theme.colors.accent }}>
                <span>Accent</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Interactive Elements</h3>
            <input 
              type="text" 
              placeholder="Enter text..." 
              className={styles.input}
            />
            <button className={styles.buttonSecondary}>
              Secondary Button
            </button>
          </div>
        </div>
      </section>

      <section className={styles.specs}>
        <h2>Current Theme Specifications</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specCard}>
            <h4>Typography</h4>
            <ul>
              <li>Font: {theme.typography.fontFamily}</li>
              <li>Base Size: {theme.typography.fontSizeBase}</li>
              <li>Line Height: {theme.typography.lineHeight}</li>
            </ul>
          </div>
          <div className={styles.specCard}>
            <h4>Effects</h4>
            <ul>
              <li>Border Radius: {theme.effects.borderRadius}</li>
              <li>Border Width: {theme.effects.borderWidth}</li>
              <li>Transition: {theme.effects.transition}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
