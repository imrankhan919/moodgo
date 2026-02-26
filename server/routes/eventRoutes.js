import express from "express"
import protect from "../middleware/authMiddleware.js"
import eventController from "../controller/eventController.js"
import upload from "../middleware/imageUploadMiddleware.js"


const router = express.Router()


router.post("/", protect.forUser, upload.single('eventImage'), eventController.createEvent)
router.get("/", protect.forUser, eventController.getEvents)
router.get("/:eid", protect.forUser, eventController.getEvent)



export default router