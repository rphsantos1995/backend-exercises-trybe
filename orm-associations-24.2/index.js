// index.js
const express = require('express');
const { Address, Employee } = require('./models');
const Sequelize = require('sequelize');
const config = require('./config/config');


const sequelize = new Sequelize(config.development);

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findOne({ where: { id } });

    

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });


// setting up lazy loading for pulling info from db only when necessary
    if (req.query.includeAddresses === 'true') {
        const addresses = await Address.findAll({ where: { employee_id: id } });
        return res.status(200).json({ employee, addresses });
      }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


app.post('/employees', async (req, res) => {

  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // if method new Register runs without errors
    // the transaction can be ended with commit function
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // on catch error, the rollback function revert all changes
    
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;