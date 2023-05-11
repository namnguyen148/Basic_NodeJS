import connection from "../configs/connectDB"

let getHomePage = (rep, res) => {
  let data = []
  connection.query(
    'SELECT * FROM `users` ',
    function(err, results, fields) {
      results.map((row) => {
        data.push ({
          id : row.id,
          email : row.email,
          address : row.address,
          firstName : row.firstName,
          lastName : row.lastName
        })
    
      });
      console.log('check query ok', data);
      return res.render('index.ejs' , {dataUser: JSON.stringify(data)})
    })
}

module.exports = {
  getHomePage
}