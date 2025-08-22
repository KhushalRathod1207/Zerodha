const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("Position", PositionSchema);

module.exports = PositionsModel;
