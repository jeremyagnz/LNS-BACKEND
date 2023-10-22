const create = (req:any, res:any) => {

    console.log(req.body);
    console.log(req.query);
    res.status(201).send({message:"Player Created"});

}

export default create;