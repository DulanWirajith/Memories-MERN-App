const Posts = require("../database/Post");

// test Registration

exports.addPost = (req, res, next) => {
  Posts.save(req.body)
    .then((result) => {
      console.log("Post Addded");
      res.status(200).json({
        messege: "Post Added!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "Post adding Failed",
      });
    });
};

// test update

exports.postUpdate = (req, res, next) => {
  Posts.update(
    {
      createdAt: req.body.test_no,
    },
    { $set: req.body }
  )
    .then((result) => {
      console.log("Post Updated");
      res.status(200).json({
        messege: "Post Updated!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "Post Update Failed!",
      });
    });
};

// get one test
exports.getPost = (req, res, next) => {
  console.log(req.params.creater_at);
  Posts.getOne({
    creater_at: req.params.creater_at,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get Post Failed!",
      });
    });
};

// get all testes

exports.getPosts = (req, res, next) => {
  Posts.getAll({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get Posts Failed!",
      });
    });
};
