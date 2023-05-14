const pathService = require("../services/pathService");


async function get(req, res) {
  const { start, object, end } = req.query;

  try {
    if (start == undefined || object == undefined || end == undefined) {
        return res.status(400).json({
            message: "Bad Request",
        });
    }

    return res.status(200).json(await pathService.getPath(start, object, end));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in getPath",
    });
  }
}

module.exports = { get };
