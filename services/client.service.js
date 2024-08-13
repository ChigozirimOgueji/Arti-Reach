import ClientModel from "../models/client.model.js";

class ClientService {
    // create new client
    async createClient(clientData) {
      const newClient = await ClientModel.create(clientData);
      return newClient;
    }
  
    // retrieve all users
    async findClients(query) {
      const clients = await ClientModel.find(query);
      return clients;
    }
  
    // retrieve one user
    async findClient(query) {
      const client = await ClientModel.findOne(query);
      return client;
    }
  
    // update a user by id
    async updateClient(id, data) {
      const updatedClient = await ClientModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatedClient;
    }
  
    // delete user by id.....check out soft delete
    async deleteClient(id) {
      const deletedClient = await ClientModel.findByIdAndDelete(id);
      return deletedClient;
    }
  
  }
  
  export default new ClientService();