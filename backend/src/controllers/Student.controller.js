const Student = require('../models/Student')
// =========================================================
const createStudent = async (req, res) => {
    const student = new Student({
        student_id: req.body.student_id,
        full_name: req.body.full_name,
        email: req.body.email,
        hashed_password: req.body.hashed_password
    })
    await student.save();
    res.send(student);
};

const getStudents = async (req, res) => {
    const allStudents = await Student.find();
    return res.status(200).json(allStudents);
}
/*

const getStudentByID = async (req, res) => {
    const student = await Student.findOne({ student_id: req.params.id });

    if (!student) return res.status(404).send('No Student with this ID.');
    res.send(student);
}


const updateStudent = async (req, res) => {
    const student = await Student.findOneAndUpdate({ student_id: req.params.id },
        {
            student_id: req.body.student_id,
            name: req.body.full_name,
            email: req.body.email
        },
        { new: true });

    if (!student) return res.status(404).send('No Student with this ID.');
    res.send(student);
}

const deleteStudent = async (req, res) => {
    const student = await Student.findByIdAndDelete({ student_id: req.params.id });

    if (!student) return res.status(404).send('No Student with this ID.');
    res.status(200).send(student);
}
*/
// =========================================================
module.exports = {
    getStudents,
    //getStudentByID,
    //updateStudent,
    //deleteStudent,
    createStudent
}