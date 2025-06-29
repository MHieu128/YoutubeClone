export interface HomeVideo {
  type: string;
  videoId?: string;
  title: string;
  channelTitle: string;
  description?: string;
  viewCount: string;
  publishedTimeText: string;
  publishDate: string;
  publishedAt: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  channelThumbnail?: Thumbnail[];
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}