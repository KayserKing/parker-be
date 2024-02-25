// services/yourService.js
const model = require("../models/index.js");
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

class service {
  async createData(data) {
    try {
      const { name, address, area, mobile, base64Image } = data;

      const sql =
        "INSERT INTO parking_details (name, address, area, mobile, image_data) VALUES (?, ?, ?, ?, ?)";
      const params = [name, address, area, mobile, base64Image];

      return new Promise((resolve, reject) => {
        model.query(sql, params, (err, result) => {
          if (err) {
            console.error("Error executing MySQL query:", err);
            reject("Internal Server Error");
          } else {
            console.log("Data inserted successfully");
            resolve("Data inserted successfully");
          }
        });
      });
    } catch (error) {
      console.error("Error in createData:", error);
      throw "Internal Server Error";
    }
  }


  async updateData(id, newData) {
   try {
      const { name, address, area, mobile, base64Image } = newData;

      const sql = 'UPDATE parking_details SET name=?, address=?, area=?, mobile=?, image_data=? WHERE id=?';
      const params = [name, address, area, mobile, base64Image, id];

      return new Promise((resolve, reject) => {
         model.query(sql, params, (err, result) => {
            if (err) {
               console.error('Error executing MySQL query:', err);
               reject('Internal Server Error');
            } else {
               console.log('Data updated successfully');
               resolve('Data updated successfully');
            }
         });
      });
   } catch (error) {
      console.error('Error in updateData:', error);
      throw 'Internal Server Error';
   }
}

async deleteData(id) {
   try {
      const sql = 'DELETE FROM parking_details WHERE id=?';
      const params = [id];

      return new Promise((resolve, reject) => {
         model.query(sql, params, (err, result) => {
            if (err) {
               console.error('Error executing MySQL query:', err);
               reject('Internal Server Error');
            } else {
               console.log('Data deleted successfully');
               resolve('Data deleted successfully');
            }
         });
      });
   } catch (error) {
      console.error('Error in deleteData:', error);
      throw 'Internal Server Error';
   }
}
}

module.exports = new service();
