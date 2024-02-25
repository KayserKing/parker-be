// controllers/yourController.js
const services = require("../services/index.js");

class controller {
  async createData(req, res) {
    try {
      const { name, address, area, mobile, base64Image } = req.body;
      await services.createData({ name, address, area, mobile, base64Image });
      res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
      console.error("Error in createData:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateData(req, res) {
   try {
      const { id } = req.params; // Assuming the ID is passed in the URL
      const { name, address, area, mobile, base64Image } = req.body;

      await services.updateData(id, { name, address, area, mobile, base64Image });
      res.status(200).json({ message: 'Data updated successfully' });
   } catch (error) {
      console.error('Error in updateData:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}

async deleteData(req, res) {
   try {
      const { id } = req.params; // Assuming the ID is passed in the URL

      await services.deleteData(id);
      res.status(200).json({ message: 'Data deleted successfully' });
   } catch (error) {
      console.error('Error in deleteData:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
}
}

module.exports = new controller();
