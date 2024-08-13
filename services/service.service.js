import ServiceModel from '../models/service.model.js';

class ServiceService {

    async createService(data) {
        const service = await ServiceModel.create(data);
        return service;
    }

    async getServices(query){
        const services = await ServiceModel.find(query);
        return services;
    }

    async getServiceById(id) {
        const service = await ServiceModel.findById();
        return service;
    }

   
   async updateService(data, id){
    const service = await ServiceModel.findByIdAndUpdate(data, id, { new: true });
    return service;
   }

   async deleteService(id){
    const service = await ServiceModel.findByIdAndDelete(id);
    return service;
   }


}

export default new ServiceService();
