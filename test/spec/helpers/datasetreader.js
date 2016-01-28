var FrameData = require("../../../src/framework/framedata.js");
var LayerData = require("../../../src/framework/layerdata.js");
var StageData = require("../../../src/framework/stagedata.js");
var CgroupData = require("../../../src/framework/cgroupData.js");
var CobjData = require("../../../src/framework/cobjData.js");

var datasetReader = function(){

  this.mapping = {
      frame : FrameData,
      layer : LayerData,
      stage : StageData,
      group : CgroupData,
      node : CobjData,
      text : CobjData,
      image : CobjData,
  };

  this.readFromFile = function(datasetFileName){

    var result =  [];
    var dataset = require('../datasets/' + datasetFileName);
    var length = dataset.length;

    for(var i = 0; i < length; i++)
    {
        var data = dataset[i];
        if(this.mapping[data.type])
        {
            result.push(new this.mapping[data.type](data));
        }
        else {
          throw 'no mapper for type:' + data.type;
        }
    }

    return result;
  };
};

module.exports = datasetReader;
