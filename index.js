const express = require("express");
const { getMaxListeners } = require("process");
const app = express();
const port = 3000;
const persons = [
  { name: "ali", age: 25, mail: "ali@gmail.com", id: 1 },
  { name: "sami", age: 28, mail: "sami@gmail.com", id: 2 },
  { name: "mohamed", age: 36, mail: "mohamed@gmail.com", id: 3 },
  { name: "amir", age: 19, mail: "amir@gmail.com", id: 4 },
  { name: "salma", age: 29, mail: "salma@gmail.com", id: 5 },
];
app.use(express.json());
app.get("/persons", (req, res) => {
  res.send(persons);
});
app.post("/newperson", (req, res) => {
  const newPerson = [...persons, req.body];
  res.send({ msg: "voici les newPersons", newPerson });
});
app.delete("/delete/:id", (req, res) => {
  const deleteperson = persons.filter((person) => person.id != req.params.id);
  res.send({ msg: "a person was deleted", deleteperson });
});
app.put("/update/:id", (req, res) => {
  const updateperson = persons.map((person) =>
    person.id == req.params.id ? { ...person, ...req.body } : person
  );
  res.send({ msg: "a update person", updateperson });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
