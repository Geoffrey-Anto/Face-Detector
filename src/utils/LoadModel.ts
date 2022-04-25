import * as blazeface from "@tensorflow-models/blazeface";

const loadModel = async () => {
    try {
      const model = await blazeface.load();
      return model
    } catch(err) {
      console.log(err);
      return null;
    }
};

export default loadModel;