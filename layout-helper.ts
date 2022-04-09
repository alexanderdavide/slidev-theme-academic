import type { CSSProperties } from 'vue';

export function resolveAssetUrl(url: string) {
  if (url.startsWith('/')) return import.meta.env.BASE_URL + url.slice(1);
  return url;
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  const isColor = background && ['#', 'rgb', 'hsl'].some((v) => background.indexOf(v) === 0);

  const style = {
    background: isColor ? background : undefined,
    backgroundImage: isColor
      ? undefined
      : background
      ? dim
        ? `linear-gradient(#0009, #0009), url(${resolveAssetUrl(background)})`
        : `url("${resolveAssetUrl(background)}")`
      : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (!style.background) delete style.background;

  return style;
}
