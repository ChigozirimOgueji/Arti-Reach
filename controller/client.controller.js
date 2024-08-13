import ClientService from "../services/client.service.js";
class ClientController {

    async findClients(req, res) {
        const query = req?.query || {}
        const users = await ClientService.findClients(query);
        res.status(200).send({
          success: true,
          message: "All users successfully retrieved",
          data: users,
        });
      }
    
      //find a user
      async findClient(req, res) {
        const { query } = req;
        const user = await ClientService.findClient(query);
        res.status(200).send({
          success: true,
          message: "User successfully retrieved",
          data: user,
        });
      }
    
      //update user
      async updateClient(req, res) {
        const { id } = req.params;
        const {name, email} = req.body;
        const updatedClient = await ClientService.updateClient( id, {name, email});
        res.status(200).send({
          success: true,
          message: "User updated successfully",
          data: updatedClient,
        });
      }
    
      //delete user
      async deleteClient(req, res) {
        const id = req.params.id;
        const deletedUser = await ClientService.deleteClient(id);
        res.status(200).send({
          success: true,
          message: "Changes saved successfully",
          data: deletedUser,
        });
      }
    
}
export default new ClientController();