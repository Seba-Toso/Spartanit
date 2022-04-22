require('dotenv').config()
const mysql = require('mysql')
const dataBaseRouter = require('express').Router()
const { json } = require('express')


dataBaseRouter.get('/', (req, res, next) => {

  let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    multipleStatements: true
  });

  connection.connect((err) => {
    if (err) console.err('There was en error trying to connect with DB: ', err);
    console.log('connected to DB');
  })



  connection.query(
    'SELECT * FROM projects; SELECT * FROM aboutItems; SELECT * FROM servicePilar; SELECT * FROM servicesTags; SELECT * FROM blocks; SELECT * FROM faqs; SELECT * FROM context',
    (error, results) => {
      if (error) {
        console.error('An error has been detected when ask data to DB');
        res.status(400).send(error)
        connection.end();
      }
      let DBdata = {}
      console.log('Data has been recived from DB');

      let projects = results[0].map(project => {
        return {
          customerLogo: project.customerLogo,
          customerName: project.customerName,
          project: project.project,
          description: project.description,
          images: [project?.image1, project?.image2, project?.image3, project?.image4],
          key: project.key
        }
      })

      let aboutItems = results[1]

      let servicePilar = results[2].map(pilar => {
        return {
          name: pilar.name,
          description: pilar.description,
          items: [
            pilar?.item1, pilar?.item2, pilar?.item3, pilar?.item4, pilar?.item5, pilar?.item6,
          ],
          image: pilar.image,
          order: pilar.order,
          ending: pilar.ending
        }
      })

      let servicesTags = results[3]

      let blocks = results[4].map(block => {
        return {
          name: block.name,
          description: block.description,
          items: [
            block?.item1, block?.item2, block?.item3
          ],
          text: block.text,
          order: block.order,
          place: block.place
        }
      })

      let faqs = results[5]
      let context = results[6]
      DBdata = { projects: projects, aboutItems: aboutItems, servicePilar: servicePilar, serviceTags: servicesTags, blocks: blocks, faqs: faqs, context: context }
      res.status(200).send(DBdata)
      connection.end();
    });
})


module.exports = dataBaseRouter