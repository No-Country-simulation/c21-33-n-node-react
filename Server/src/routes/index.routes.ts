import { userRouter } from "@/api/user/userRouter";
import express, { type Router } from "express";


const router : Router = express.Router()

router.use('/users', userRouter )

export default router
