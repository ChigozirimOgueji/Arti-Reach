import JobModel from '../models/job.model.js';

class JobService {
    async createJob(data) {
        const job = await JobModel.create(data)
        return job;
    }
    
      async getJobById(id) {
        const job = await JobModel.findById(id).populate();
        return job;
      }

     async getJobByClientId(clientId) {
      const jobs = await JobModel.find({client:clientId}).populate();
      return jobs;
     }

     async getJobByArtisanId(artisanId){
      const jobs = await JobModel.find({artisan:artisanId}).populate();
      return jobs;
     }

      async updateJob(id, data) {
        const updatedJob = await JobModel.findByIdAndUpdate(id, data, { new: true });
        return updatedJob;
      }
    
      async deleteJob(id) {
        const deletedJob = await JobModel.findByIdAndDelete(id);
        return deletedJob;
      }


    async acceptJob(id, artisanId) {
        const job = await JobModel.findByIdAndUpdate(id,{ status: 'accepted', artisan: artisanId },{ new: true } );
        return job
      }

      async completeJob(id, artisanId) {
        const job = await JobModel.findByIdAndUpdate(id,{ status: 'completed', artisan: artisanId },{ new: true } );
        return job
      }
    
      async cancelJob(id, artisanId) {
        const job = await JobModel.findByIdAndUpdate(id,{ status: 'cancelled', artisan: artisanId },{ new: true } );
        return job
      }
      
}

export default new JobService();

 // async getAllJobs(query) {
      //   const allJobs = await JobModel.find(query);
      //   return allJobs;
      // }

      // async getAllJobArtisan(artisanId){
      //   const idObject = mongoose.Types.ObjectId(artisanId); // Convert to ObjectId
      //   const job = await JobModel.find({artisan: idObject})
      //   return job
      // }

      // async getAllJobClient(clientId){
      //   const idObject = mongoose.Types.ObjectId(clientId); // Convert to ObjectId
      //   const job = await JobModel.find({clientId: idObject})
      //   return job
      // }
      
    // //   get jobs by artisan id
    //   async getJobByArtisan(){
    //     const jobs = await JobModel.find({artisan: artisanId}).populate();
    //     return jobs;
    //   }
    // //  get jobs by client id
    // async getJobByClient(){
    //     const jobs = await JobModel.find({client: clientId}).populate();
    //     return jobs;
    // }