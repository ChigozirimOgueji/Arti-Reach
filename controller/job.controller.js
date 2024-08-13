import JobService from '../services/job.service.js';

class JobController {

    async createJob(req, res) {
        try{
            const clientId = req.user._id
            const artisanId = req.params.artisanId
            const { taskName, taskDescription, date, location } = req.body;
    
            // Create and save the job
            const job =  JobService.createJob({
              client: clientId,
              artisan: artisanId,
              taskName,
              taskDescription,
              date,
              location,
              status: 'pending', // default status
            });       
            res.status(201).send({
                success:true,
                message: "Job request created successfully",
                job
           })
        }catch (error) {
            console.error(error);
            res.status(500).send({
                success: false, 
                message: 'Failed to create jobs' 
            });
        }
 
}

    async getJobById(req,res){
        try {
            const jobId = req.params.jobId;
            const job = await JobService.getJobById(jobId);
            res.status(200).send({
                success: true,
                job,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({ 
                success: false, 
                message: 'Failed to fetch job' 
            });
        }
    }

    async getAllJobArtisan(req,res){
        try{
            const artisanId = req.user._id; // Assuming artisanId is available in req.user._id
            if (!artisanId){
                res.status(404).send({
                    message: "sign in",
                    success: false
                });
            }
            const jobs = await JobService.getJobByArtisanId(artisanId);
    
            return res.status(200).send({
                success: true,
                data: jobs
            })
        }catch(error){
            return res.status(500).send({
                success: false,
                message: 'Error retrieving jobs',
                error: error.message
              });
        }
    }
    
    async getAllJobClient(req,res){
        try{
            const clientId = req.user._id; // Assuming clientId is available in req.user._id
            if (!clientId){
                res.status(404).send({
                    message: "sign in",
                    success: false
                });
            }
            const jobs = await JobService.getJobByClientId(clientId);
    
            return res.status(200).send({
                success: true,
                data: jobs
            })
        }catch(error){
            return res.status(500).send({
                success: false,
                message: 'Error retrieving jobs',
                error: error.message
              });
        }
    }
    

    async updateJob(req,res){
        try {
            const jobId = req.params.id;
            const jobData = req.body;
            // const foundJob = await JobService.getJobById(jobId)
            // if (!foundJob) {
            //     return res.status(404).send({
            //         message: "Invalid _id",
            //         success: false
            //     })
            // } 
            const updatedJob = await JobService.updateJob(jobId, jobData);
            res.status(200).send({
                success: true,
                message: 'Job updated successfully',
                job: updatedJob
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({ 
                success: false, 
                message: 'Failed to update job' 
            });
        }
    }

    async deleteJob(req,res){
        try {
            const jobId = req.params.jobId;
            await JobService.deleteJob(jobId);
            res.status(200).send({
                success: true,
                message: 'Job deleted successfully'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({ 
                success: false, 
                message: 'Failed to delete job' 
            });
        }
    }



    async acceptJob(req,res){
        try {
            const jobId = req.params.id;
            const artisanId = req.user._id; // Artisan ID from the authenticated user
            
            if (!artisanId) {
                return res.status(401).send({
                    success: false,
                    message: 'User is not authenticated'
                });
            }
    
            const acceptedJob = await JobService.acceptJob(jobId, artisanId);
            res.status(200).send({
                success: true,
                message: 'Job accepted successfully',
                job: acceptedJob
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: 'Failed to accept job'
            });
        }
    }   
    async completeJob(req,res){
        try {
            const jobId = req.params.id;
            const artisanId = req.user._id; // Artisan ID from the authenticated user
            
            if (!artisanId) {
                return res.status(401).send({
                    success: false,
                    message: 'User is not authenticated'
                });
            }
    
            const completedJob = await JobService.completeJob(jobId, artisanId);
            res.status(200).send({
                success: true,
                message: 'Job completed successfully',
                job: completedJob
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: 'Failed to complete job'
            });
        }
    }
    async cancelJob(req,res){
        try {
            const jobId = req.params.id;
            const artisanId = req.user._id; // Artisan ID from the authenticated user
            
            if (!artisanId) {
                return res.status(401).send({
                    success: false,
                    message: 'User is not authenticated'
                });
            }
    
            const canceledJob = await JobService.cancelJob(jobId, artisanId);
            res.status(200).send({
                success: true,
                message: 'Job canceled successfully',
                job: canceledJob
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: 'Failed to cancel job'
            });
        }
    }
    


 
}


export default new JobController();