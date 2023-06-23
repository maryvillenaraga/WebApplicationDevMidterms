const Student = require('../models/models');

exports.create = (req, res) => {
  if (!req.body.major) {
    return res.status(400).send({
      message: 'Major cannot be empty',
    });
  }

  const student = new Student({
    name: req.body.name || 'Untitled',
    major: req.body.major,
    age: req.body.age,
    createdDate: req.body.createdDate,
    updatedDate: req.body.updatedDate,
  });

  student.save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: 'Something went wrong!',
        error: err,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body.major) {
    return res.status(400).send({
      message: 'Major cannot be empty',
    });
  }

  Student.findByIdAndUpdate(id,
    {
      name: req.body.name || 'Untitled',
      major: req.body.major,
      age: req.body.age,
      createdDate: req.body.createdDate,
      updatedDate: req.body.updatedDate,
    },
    { new: true})
    .then((student) => {
     res.send(student)
     
    }).catch((err) => {
      res.status(500).send({
        message: 'Something went wrong!',
        error: err,
      })
})}

exports.findAll = (req, res) => {
  Student.find()
    .then((students) => {
      res.send(students)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something went wrong!',
        error: err,
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then((student) => {
      if (!student) {
         res.status(404).send({
          'message': 'Student not found',
        }
        )
      }
      res.send(student)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something went wrong!',
        error: err,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then((student) => {

      res.send({
        'message': 'Student deleted successfully',
      })

    })
    .catch((err) => {
      res.status(500).send({
        'message': 'Something went wrong!',
        error: err
      })
    });
};