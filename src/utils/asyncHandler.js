const asyncHandlers = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandlers };

// const asyncHandlers = (fn = async (req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(err.code).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });
