const nuevoproyectos = require("../models/Project.js");

const { MongoClient } = require('mongodb')
module.exports={

  list:async(req,res)=>{
     const client = new MongoClient("mongodb+srv://matcardillo91:curso2025@cluster0.ixsyv.mongodb.net/");
  try{
    const projects = await nuevoproyectos.find().where()
   
    

    // Obtener todos los documentos
  

      

 //////////////////////////////////////////


  return res.status(200).json({
  ok:true,
  msg:"lista de proyectos",
  projects 

   
  
  })
  
  
  }catch(error){
  console.log(error);
  return res.status(error.status||"500").json({
  
  ok:false,
  msg:error.message||"hubo un error en la lista de  proyectos"
  
  
  })
  
  
  
  }
  
  
  
  
  },
  
  store:async(req,res)=>{
      try{
      
        const { title, description,completed,createdAt } = req.body;

        // Validación básica
        if (!title) {
          return res.status(400).json({ error: "El título es obligatorio" });
        }
    
        const newTask = new nuevoproyectos({ title, description,completed,createdAt });
        await newTask.save();
    
        res.status(201).json({ message: "Tarea creada exitosamente", task: newTask });
      
      
      }catch(error){
      console.log(error);
      return res.status(error.status||"500").json({
      
      ok:false,
      msg:error.message||"hubo un error en guardar proyecto"
      
      
      })
      
      
      
      }
      
      
      
      
      },
      detail:async(req,res)=>{
        const userId = req.params.id; // Obtener el valor de :id
          try{
            
            const project = await nuevoproyectos.findById(userId);

          return res.status(200).json({
          ok:true,
          msg:"detalle de proyecto",
          project
          
          
          })
          
          
          }catch(error){
          console.log(error);
          return res.status(error.status||"500").json({
          
          ok:false,
          msg:error.message||"hubo un error en el detalle de proyecto"
          
          
          })
          
          
          
          }
          
          
          
          
          },
          upDate:async(req,res)=>{
            
              try{ 
                const userId = req.params.id;
            const nuevoUsuario = req.body;
               
                await nuevoproyectos.findByIdAndUpdate(
                  userId, 
                  nuevoUsuario // Pasamos el objeto directamente
                  
              );
             
                
              return res.status(200).json({
              ok:true,
              msg:"proyecto actualizado"
              
              
              })
              
              
              }catch(error){
              console.log(error);
              return res.status(error.status||"500").json({
              
              ok:false,
              msg:error.message||"no se pudo actualizar el proyecto"
              
              
              })
              
              
              
              }},
              remove:async(req,res)=>{
  try{
    await nuevoproyectos.findByIdAndDelete(req.params.id);
  
  return res.status(201).json({
  ok:true,
  msg:"proyecto eliminado"
  
  
  })
  
  
  }catch(error){
  console.log(error);
  return res.status(error.status||"500").json({
  
  ok:false,
  msg:error.message||"no se pudo eliminar el proyecto"
  
  
  })
  
  
  
  }
  
  
  
  
  },
              
              
              
              
              
            
                  
  
  
  
  
  
                  }