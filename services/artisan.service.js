import ArtisanModel from "../models/artisan.model.js";

class ArtisanService {
    // create new client
    async createArtisan(artisanData) {
      const artisan = await ArtisanModel.create(artisanData);
      return artisan;
    }
  
    // retrieve all users
    async findArtisans(query) {
      const artisans = await ArtisanModel.find(query);
      return artisans;
    }
  
    // retrieve one user
    async findArtisan(query) {
      const artisan = await ArtisanModel.findOne(query);
      return artisan;
    }
  
    // update a user by id
    async updateArtisan(id, data) {
      const updatedArtisan = await ArtisanModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatedArtisan;
    }
  
    // delete user by id.....check out soft delete
    async deleteArtisan(id) {
      const deletedArtisan = await ArtisanModel.findByIdAndDelete(id);
      return deletedArtisan;
    }

    async getArtisansByServiceId(serviceId) {
      const artisans = await ArtisanModel.find({service:serviceId}).populate("service");
      return artisans;
    }
  
  }
  
  export default new ArtisanService();