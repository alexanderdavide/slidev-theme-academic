import type { CSSProperties } from 'vue';

export function resolveAssetUrl(url: string) {
  const baseUrl = import.meta.env.BASE_URL;
  if(!url.startsWith('/')) return url;
  if(baseUrl.endsWith('/')) return baseUrl + url.slice(1);
  return baseUrl + url;
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
