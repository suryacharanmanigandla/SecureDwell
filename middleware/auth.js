const auth = {
  // Check if user is logged in
  isLoggedIn: (req, res, next) => {
    console.log('Checking if logged in:', req.session);
    if (req.session.user) {
      return next();
    }
    return res.redirect('/login');
  },

  // Check if user is a buyer
  isBuyer: (req, res, next) => {
    console.log('Checking if buyer:', req.session);
    if (req.session.user && req.session.user.role === 'buyer') {
      return next();
    }
    if (req.session.user) {
      // User is logged in but not a buyer
      return res.redirect('/');
    }
    return res.redirect('/login');
  },

  // Check if user is a seller
  isSeller: (req, res, next) => {
    console.log('Checking if seller:', req.session);
    if (req.session.user && req.session.user.role === 'seller') {
      return next();
    }
    if (req.session.user) {
      // User is logged in but not a seller
      return res.redirect('/');
    }
    return res.redirect('/login');
  }
};

module.exports = auth; 