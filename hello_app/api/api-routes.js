import { Router } from "express";
import db from "./db/db-instance.js";

import Greetings from './db/greetings-model.js';

import Visitor from "./db/visitors-model.js";

const router = Router();
router.get('/',(req, res) =>{
    res.send('Hello World !')
})

router.get('/greetings', async (req,res)=>{
  //  
  const greetings= await Greetings.find({});
  const greetingsList = greetings.map(data => data.greetings);
  res.json(greetingsList)
})
router.get('/visitors', async (req,res) => {
    const visitor = await Visitor.findOne({name: "latest"});
    if(visitor){
        visitor.visitorcount++;
        await visitor.save();
        res.json(visitor.visitorcount)
        
    }else if(visitor == null ){
        await Visitor.create({name: "latest", visitorcount: '1'});
        res.json(1)

    }})

export default router;