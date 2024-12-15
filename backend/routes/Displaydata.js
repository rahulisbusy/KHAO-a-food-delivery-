import express from 'express';
import e, { Router } from 'express';

const router=Router();

router.post('/foodData',(req,res)=>{
    try {
        const response= res.send([global.items,global.category]);
        
    } catch (error) {
        console.log(error.message);
        res.send("Server error")
    }
})
export default router;