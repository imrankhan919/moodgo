import express from "express"
import adminController from "../controller/adminController.js"
import protect from "../middleware/authMiddleware.js"


const router = express.Router()

router.get("/users", protect.forAdmin, adminController.getAllUsers)
router.get("/ratings", protect.forAdmin, adminController.getAllRatings)
router.get("/events", protect.forAdmin, adminController.getAllEvents)
router.put("/events/:eid", protect.forAdmin, adminController.updateEvent)
router.get("/orders", protect.forAdmin, adminController.getAllOrders)
router.get("/coupons", protect.forAdmin, adminController.getAllCoupons)
router.post("/coupons", protect.forAdmin, adminController.createCoupon)
router.put("/coupons/:cid", protect.forAdmin, adminController.updateCoupon)


export default router