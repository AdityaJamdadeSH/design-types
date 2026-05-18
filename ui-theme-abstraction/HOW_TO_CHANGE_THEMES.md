# How to Change Themes

## Theme Selection via Configuration Only

This system is configured so that themes are **only** set through the `appsettings.json` file. There is no UI-based theme switcher.

## Steps to Change Theme

### 1. Open the Configuration File
Open `ui-theme-abstraction/appsettings.json`

### 2. Change the Active Theme
Modify the `active` property:

```json
{
  "theme": {
    "active": "glassmorphism",  // Change this to your desired theme
    "allowRuntimeSwitch": false,
    "defaultTheme": "neo-brutalism"
  }
}
```

### 3. Save and Reload
- Save the file
- The browser will automatically reload (if using Vite dev server)
- The new theme will be applied instantly

## Available Themes

You can set `active` to any of these values:

| Theme Name | Description |
|------------|-------------|
| `neo-brutalism` | Bold, vibrant colors with thick borders |
| `glassmorphism` | Frosted glass effects and transparency |
| `minimalism` | Clean, simple, whitespace-focused design |
| `skeuomorphism` | Realistic, 3D-like design elements |
| `claymorphism` | Soft, inflated clay-like elements |
| `liquid-glass` | Fluid, organic animations |

## Configuration Settings

### `active`
**Type**: `string`  
**Description**: The currently active theme  
**Required**: Yes

### `allowRuntimeSwitch`
**Type**: `boolean`  
**Description**: Currently set to `false` - themes can only be changed via config file  
**Required**: Yes

### `defaultTheme`
**Type**: `string`  
**Description**: Fallback theme if the active theme is not found  
**Required**: Yes

## Examples

### Switch to Glassmorphism
```json
{
  "theme": {
    "active": "glassmorphism",
    "allowRuntimeSwitch": false,
    "defaultTheme": "neo-brutalism"
  }
}
```

### Switch to Minimalism
```json
{
  "theme": {
    "active": "minimalism",
    "allowRuntimeSwitch": false,
    "defaultTheme": "neo-brutalism"
  }
}
```

### Switch to Claymorphism
```json
{
  "theme": {
    "active": "claymorphism",
    "allowRuntimeSwitch": false,
    "defaultTheme": "neo-brutalism"
  }
}
```

## Important Notes

?? **No UI Theme Switcher**: The theme selector UI has been removed. Themes can only be changed through `appsettings.json`.

? **Instant Updates**: When running the dev server, changes to `appsettings.json` may require a page refresh to take effect.

? **Production**: In production builds, the theme is set at build time based on `appsettings.json`.

## For Developers

### Why Configuration-Only?

This approach is ideal for:
- **Production environments** where you want to control the theme centrally
- **Multi-tenant applications** where each tenant has a predefined theme
- **Brand consistency** where users shouldn't change themes
- **Deployment strategies** where different environments use different themes

### Enabling Runtime Switching (Optional)

If you need to allow users to switch themes in the UI, you can:

1. Set `allowRuntimeSwitch` to `true` in `appsettings.json`
2. Add theme switcher UI back to `App.jsx`
3. Use the `changeTheme()` function from `useTheme()` hook

But by default, this is **disabled** for configuration-based theme control.
