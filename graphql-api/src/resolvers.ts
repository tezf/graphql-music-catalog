import { Context } from "./app";

export const resolvers = {
  Query: {
    albums: (_parent: any, _args: any, context: Context) => {
      return context.dataSources.musicAPI.getAlbums();
    },
    album: (_parent: any, args: any, context: Context) => {
      return context.dataSources.musicAPI.getAlbum(args.id);
    },
    artist: (_parent: any, args: any, context: Context) => {
      return context.dataSources.musicAPI.getArtist(args.id);
    },
  },
};
