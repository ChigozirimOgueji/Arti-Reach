import { Router } from "express";
const router = Router();
import JobController from "../controller/job.controller.js";
import { authenticateArtisan, authenticateClient } from "../middleware/authenticate.middleware.js";	
import validate from "../middleware/validate.middleware.js";
import createJobSchema from "../Schema/job.schema.js";
import { updateJobSchema } from "../Schema/job.schema.js";

router.post("/:artisanId", [
    authenticateClient, validate(createJobSchema)
  ],
    JobController.createJob)
    router.get('/:jobId', JobController.getJobById);
    router.get('/', authenticateArtisan, JobController.getAllJobArtisan);
    // router.get('/', authenticateClient, JobController.getAllJobClient);
    router.patch('/:jobId', validate(updateJobSchema), JobController.updateJob);
    router.patch('/:jobId/accept', authenticateArtisan, JobController.acceptJob);
    router.patch('/:jobId/complete', authenticateArtisan, JobController.completeJob);
    router.patch('/:jobId/cancel', authenticateArtisan, JobController.cancelJob);
    router.delete('/:jobId', JobController.deleteJob);

  export default router;