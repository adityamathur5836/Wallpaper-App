export interface Wallpaper {
  url: String;
  name: String;
}

interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/_FGbUTEWQeSymOf70RKy8A",
      name: "River",
      liked: true,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/BRdVwkWjTVGelq-L88rS9w",
      name: "Flower",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/XCe9jtPZQceET3v42k6mVw",
      name: "Lake",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ZwkTGx02RbmqHZJqXQeLzg",
      name: "Abstract",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/cy25tzjSRWWi46VHekzlgA",
      name: "Tiger",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6HE_2poiTd6EXG66ntgsiQ",
      name: "Perfume",
      liked: true,
      suggested: false,
      library: true,
    },
  ];
}
