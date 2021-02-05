const Test_Entity = require("../entity/Post_Entity");
const mongoose = require("mongoose");

exports.save = (post_object) => {
  return new Promise((resolve, reject) => {
    Test_Entity.create(post_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.search = (post_no) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOne(post_no)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getOne = (query1) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOne(query1)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Test_Entity.find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.update = (query1, post_object) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOneAndUpdate(query1, post_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
