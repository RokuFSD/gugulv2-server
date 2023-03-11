export type Card = {
  _id: string;
  card_type: "video" | "new" | "gif" | "results";
  data: Results | VideoResult | NewResult | GifSearch;
};

export type GifSearch = {
  type: string;
  id: string;
  url: string;
  slug: string;
  embed_url: string;
  title: string;
  source: string;
  images: {
    fixed_height: {
      height: string;
      width: string;
      url: string;
      size: string;
      mp4: string;
      mp4_size: string;
      webp: string;
      webp_size: string;
    };
    original: {
      height: string;
      width: string;
      url: string;
      size: string;
      frames: string;
      mp4: string;
      mp4_size: string;
      webp: string;
      webp_size: string;
      hash: string;
    };
  };
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
  };
};

export type Results = {
  position: number;
  title: string;
  link: string;
  displayed_link: string;
  snippet: string;
  thumbnail?: string;
};

export type VideoResult = Results & {
  duration: string;
  rich_snippet: {
    top: {
      extensions: string[];
    };
  };
};

export type NewResult = Results & {
  source: string;
  date: string;
};
