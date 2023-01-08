const express = require('express');
const cors = require('cors');
const { database } = require('./db');
const { Student } = require('./models/Student');

async function bootstrap() {
  const app = express();
 
  await database.authenticate()

  await Student.sync({ force: true });

  app.use(cors({}))
  app.use(express.json())

  app.get('/', (_req, res) => {
    
    res.send('working!')
  });

  app.get('/api/students', async (_req, res) => {
    const students = await Student.findAll();
    res.status(200).json({ students });
  })

  app.post('/api/students', async (req, res) => {
    const student = Student.build({
      fullName: req.body.fullName,
      age: req.body.age,
      dateOfBirth: req.body.dateOfBirth,
      dateOfInscription: req.body.dateOfInscription,
      cost: req.body.cost,
    })
    await student.save();
    res.status(201).json({ student });
  })
  
  // app.put('/api/students/:id')
  
  app.delete('/api/students/:id', async (req, res) => {
    await Student.destroy({ where: { id: req.params.id } });
    res.send('Deleted successfully!');
  })
  
  app.listen(5000, () => {
    console.log('server on port 5000')
  });

}

bootstrap();