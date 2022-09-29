import { RESTDataSource } from "apollo-datasource-rest";

export class MusicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8001";
  }

  async getAlbums() {
    return this.get("/albums");
  }
  async getAlbum(id: number) {
    return this.get(`/albums/${id}`);
  }

  async getArtist(id: number) {
    return this.get(`/artists/${id}`);
  }
}
