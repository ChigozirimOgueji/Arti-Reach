import ServiceService from '../services/service.service.js'; 

class ServiceController{
  async createService(req, res){
    const data = req.body;
    const newService = await ServiceService.createService(data)
    res.status(201).send({
      success: true,
      message: "Service created successfully",
      newService
    })
  }

  async getServices(req, res) {
    const serviceQuery = req.query
    const services = await ServiceService.getServices(serviceQuery);
    return res.status(200).send({
      success: true,
      services,
    });
  }


  async getService(req, res){
    const id = req.params.id
    const service = await ServiceService.getServiceById(id);
    res.status(201).send({
      success: true,
      service
    })
  }

  async updateService(req, res){
    const id = req.params.id;
    const data = req.body
    const service = ServiceService.getServiceById(id)
    if (!service){
      return res.status(404).send({
        success: false,
        message: "Service not found"
      })
    }
    const updateService = await ServiceService.updateService(id, data)
    return res.status(200).send({
        success:true,
        message: "Service updated successfully",
        updateService
    })
  }

  async deleteService(req, res){
    const serviceId = req.params.id;
    const service = ServiceService.getServiceById(serviceId);
    if (!service){
      return res.status(404).send({
        success: false,
        message: "Service not found"
      })
    }
    const deleteService = await ServiceService.deleteService(serviceId);
    return res.status(200).send({
        success:true,
        message: "Service deleted successfully",
        deleteService
    })  }

}

export default new ServiceController();