import ArtisanService from "../services/artisan.service.js";
class ArtisanController {

    async findArtisans(req, res) {
        const query = req?.query || {}
        const users = await ArtisanService.findArtisans(query);
        res.status(200).send({
          success: true,
          message: "All users successfully retrieved",
          data: users,
        });
      }
    
      //find a user
      async findArtisan(req, res) {
        const { query } = req;
        const user = await ArtisanService.findArtisan(query);
        res.status(200).send({
          success: true,
          message: "User successfully retrieved",
          data: user,
        });
      }
    
      //update user
      async updateArtisan(req, res) {
        const id = req.params.id;
        const data = req.body;
        const updatedArtisan = await ArtisanService.updateArtisan( id, data);
        res.status(200).send({
          success: true,
          message: "User updated successfully",
          data: updatedArtisan,
        });
      }
    
      //delete user
      async deleteArtisan(req, res) {
        const id = req.params.id;
        const deletedUser = await ArtisanService.deleteArtisan(id);
        res.status(200).send({
          success: true,
          message: "Changes saved successfully",
          data: deletedUser,
        });
      }

      async getArtisansByServiceId(req, res) {
        const serviceId = req.params.serviceId
        const users = await ArtisanService.getArtisansByServiceId(serviceId);
        res.status(200).send({
          success: true,
          message: "All artisans of service successfully retrieved",
          data: users,
        });
      }
    
}

export default new ArtisanController();