import express from 'express';
import formidable from 'formidable';

import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway, paytmResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// Add the following code to handle the /payment route
router.post('/payment', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Handle form data (you can customize this part based on your requirements)
    console.log('Fields:', fields);
    console.log('Files:', files);

    res.status(200).json({ message: 'Form data received successfully' });
  });
});

router.post('/callback', paytmResponse);

export default router;
